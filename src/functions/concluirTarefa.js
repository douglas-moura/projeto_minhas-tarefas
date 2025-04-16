export const concluirTarefa = async (userId, tarefaId) => {
    try {
        // busca o usuario
        const tarefasUser = await fetch(`http://192.168.15.151:3000/users_tarefas?id=${userId}`)
        const data = await tarefasUser.json()

        // pega as tarefas deste usuario
        const tarefasLista = data[0].tarefas
        const realId = data[0].tarefas.tarefa_id;
        
        // percorre as tarefas, e se o id da tarefa do igual ao tarefaId, muda o status dela
        tarefasLista.forEach((item) => {
            item.tarefa_id == tarefaId ? item.status = !item.status : item.status
        })

        // 3. Atualizar no servidor com PUT
        const respostaAtualizacao = await fetch(`http://192.168.15.151:3000/users_tarefas/${userId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                tarefas: tarefasLista,
            }),
        })        

        if (!respostaAtualizacao.ok) throw new Error('Erro ao atualizar tarefa')

        console.log('Tarefa adicionada com sucesso!')
    } catch (erro) {
        console.error('Msg erro:', erro.message)
    }
}