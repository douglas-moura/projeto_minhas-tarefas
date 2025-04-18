export const getUsuario = async (host) => {
    try {
        const response = await fetch(`http://${host}:3000/usuarios?id=0`)
        const data = await response.json()
        if (!data.length) {
            return [] // Retorna array vazio se não achar nada
        }
        return data[0]
    } catch(err) {
        console.error(err)
    }
}