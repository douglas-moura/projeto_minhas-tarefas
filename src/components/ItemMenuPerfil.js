import { Text, StyleSheet, Pressable } from "react-native"
import { createPaletaCores } from "../assets/styles"
import { useAuth } from "../contexts/AuthContext"
import { usePrefs } from "../contexts/PrefsContext"
import AsyncStorage from "@react-native-async-storage/async-storage"
import Icon from 'react-native-vector-icons/Feather'

export default function ItemMenuPerfil({ icone, texto, page, navigation }) {
    const { logout } = useAuth()
    const { estadoTemaEscuro } = usePrefs()
    const coresGlobais = createPaletaCores(estadoTemaEscuro)

    const styles = StyleSheet.create({
        infoLinha: {
            paddingVertical: 20,
            flexDirection: "row",
            alignItems: "center",
            borderBottomWidth: 0.75,
            borderBottomColor: coresGlobais.cinza.medio,
        },
        infoIcone: {
            fontSize: 20,
            color: coresGlobais.cinza.escuro,
            marginRight: 16,
            backgroundColor: coresGlobais.primaria.pelicula,
            padding: 12,
            borderRadius: 50,
        },
        infoDescr: {
            color: coresGlobais.cinza.escuro,
            fontSize: 20,
        }
    })

    return (
        <Pressable
            style={styles.infoLinha}
            onPress={async () => {
                if (texto !== 'Sair') {
                    navigation.navigate(page)
                } else {
                    await AsyncStorage.removeItem('@usuario')
                    console.log('Sair do App')
                    logout()
                }
            }}>
            <Icon name={icone} style={styles.infoIcone} />
            <Text style={styles.infoDescr}>{texto}</Text>
            <Icon name='chevron-right' style={{ fontSize: 18, position: 'absolute', right: 10 }} />
        </Pressable>
    )
}