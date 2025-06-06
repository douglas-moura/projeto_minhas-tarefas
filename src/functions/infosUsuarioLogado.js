import AsyncStorage from "@react-native-async-storage/async-storage"
import { buscarUsuarios } from "./buscarUsuarios"
import { localhost_ip } from "../helpers/localhost"

export const infosUsuarioLogado = async () => {
    try {
        const response = await AsyncStorage.getItem('@usuario')
        const data = await JSON.parse(response)
        const user = await buscarUsuarios(localhost_ip, data.id) 
        return user[0]
    } catch (error) {
        console.error('Usuario nao encontrado no Storage:', error)
        return null
    }
}