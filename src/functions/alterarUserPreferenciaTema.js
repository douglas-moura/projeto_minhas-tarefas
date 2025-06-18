import { localhost_ip } from "../helpers/localhost"

export const alterarUserPreferenciaTema = async (userId, novoTema) => {
    try {
        // 1. Buscar os dados do user específico
        const res = await fetch(`http://${localhost_ip}:3000/usuarios?id=${userId}`)
        const data = await res.json()
        const userData = data[0]
        
        if (!userData) throw new Error('Usuário não encontrado')
            
        const realId = userData.id 

        console.log(`Usuário encontrado: ${userData.preferencias[1]?.status}`)

        const respostaAtualizacao = await fetch(`http://${localhost_ip}:3000/usuarios/${realId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                ...userData,
                preferencias: [
                    userData.preferencias[0],
                    { ...userData.preferencias[1], status: novoTema }
                ]
            }),
        })

        if (!respostaAtualizacao.ok) throw new Error('Erro ao atualizar tema')
        
    } catch (erro) {
        console.error('Erro:', erro.message)
    }
}