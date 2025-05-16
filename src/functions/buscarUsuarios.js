export const buscarUsuarios = async (host, userId) => {
    try {
        const response = await fetch(`http://${host}:3000/usuarios?${userId ? `id=${userId}` : ''}`) 
        const data = await response.json()
        
        if (data.length === 0) {
            return [] // Retorna array vazio se não achar nada
        }
        //console.log(data)
        
        return data
    } catch(err) {
        console.error(err)
    }
}