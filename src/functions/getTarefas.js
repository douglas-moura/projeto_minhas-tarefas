export const getTarefas = async () => {
    try {
        const response = await fetch('http://192.168.15.151:3000/users_tarefas?id=0')
        const data = await response.json()
        if (!data.length || !data[0].tarefas) {
            return [] // Retorna array vazio se não achar nada
        }
        return data[0].tarefas
    } catch(err) {
        console.error(err)
    }
}