import { buscarUsuarios } from "./buscarUsuarios"
import { localhost } from "../helpers/infos_local"

export const autenticarUsuario = async (email, senha) => {
    const usuarios = await buscarUsuarios(localhost)
    
    for (const user of usuarios) {
        if (user.email === email && user.senha === senha) {
            return user // Retorna true se o usuário for encontrado
        }
    }
}