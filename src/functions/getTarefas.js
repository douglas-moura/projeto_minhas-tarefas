export const getTarefas = async (host) => {
    try {
        const response = await fetch(`http://${host}:3000/users_tarefas?id=0`)
        const data = await response.json()
        if (!data.length || !data[0].tarefas) {
            return [] // Retorna array vazio se não achar nada
        }
        return data[0].tarefas
    } catch(err) {
        console.error(err)
    }
}