import { buscarUsuarios } from "./buscarUsuarios"
import { localhost_ip } from "../helpers/localhost"

export const autenticarUsuario = async (email, senha) => {
    const usuarios = await buscarUsuarios(localhost_ip)
    
    for (const user of usuarios) {
        if (user.email === email && user.senha === senha) {
            return user // Retorna true se o usuário for encontrado
        }
    }
}