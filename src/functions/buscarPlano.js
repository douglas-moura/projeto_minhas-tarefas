export const buscarPlano = async (host, id) => {
    try {
        const response = await fetch(`http://${host}:3000/planos?id=${id}`)
        const data = await response.json()
        if (!data.length) return [] // Retorna array vazio se não achar nada
        return data[0] // Retorna o primeiro plano encontrado
    } catch(err) {
        console.error(err)
    }
}