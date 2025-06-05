import AsyncStorage from "@react-native-async-storage/async-storage"
import { buscarUsuarios } from "./buscarUsuarios"
import { localhost } from "../helpers/infos_local"

export const infosUsuarioLogado = async () => {
    try {
        const response = await AsyncStorage.getItem('@usuario')
        const data = await JSON.parse(response)
        const user = await buscarUsuarios(localhost, data.id) 
        return user[0]
    } catch (error) {
        console.error('Usuario nao encontrado no Storage:', error)
        return null
    }
}