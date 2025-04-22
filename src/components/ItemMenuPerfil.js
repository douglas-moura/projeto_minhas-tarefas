import { Text, StyleSheet, Pressable } from "react-native"
import { paletaCores } from "../assets/styles/StylesGlobal"
import Icon from 'react-native-vector-icons/Feather'

export default function ItemMenuPerfil({icone, texto, page, navigation}) {
    return (
        <Pressable style={styles.infoLinha} onPress={() => navigation.navigate(page)}>
            <Icon name={icone} style={styles.infoIcone} />
            <Text style={styles.infoDescr}>{texto}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    infoLinha: {
        paddingVertical: 24,
        flexDirection: "row",
        alignItems: "center",
        borderBottomWidth: 0.75,
        borderBottomColor: paletaCores.cinza.medio,
    },
    infoIcone: {
        fontSize: 28,
        color: paletaCores.cinza.escuro,
        marginRight: 16,
    },
    infoDescr: {
        color: paletaCores.cinza.escuro,
        fontSize: 20,
    }
})