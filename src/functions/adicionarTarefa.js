export const adicionarTarefa = async (userId, novaTarefa) => {
    try {
        // 1. Buscar os dados do user específico
        const res = await fetch(`http://192.168.15.151:3000/users_tarefas?id=${userId}`)
        const data = await res.json()
        const userData = data[0]

        if (!userData) throw new Error('Usuário não encontrado')
            
        const realId = userData.id;

        // 2. Adicionar nova tarefa no array local
        const tarefasAtualizadas = [...(userData.tarefas || []), novaTarefa]        

        // 3. Atualizar no servidor com PUT
        const respostaAtualizacao = await fetch(`http://192.168.15.151:3000/users_tarefas/${realId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                ...userData,
                tarefas: tarefasAtualizadas,
            }),
        })        

        if (!respostaAtualizacao.ok) throw new Error('Erro ao atualizar tarefa')

        console.log('Tarefa adicionada com sucesso!')
    } catch (erro) {
        console.error('Erro:', erro.message)
    }
}