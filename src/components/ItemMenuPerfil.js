import { Text, StyleSheet, Pressable } from "react-native"
import { paletaCores } from "../assets/styles/StylesGlobal"
import Icon from 'react-native-vector-icons/Feather'

export default function ItemMenuPerfil({icone, texto, page, navigation}) {
    return (
        <Pressable style={styles.infoLinha} onPress={() => navigation.navigate(page)}>
            <Icon name={icone} style={styles.infoIcone} />
            <Text style={styles.infoDescr}>{texto}</Text>
            <Icon name='chevron-right' style={{fontSize: 18, position: 'absolute', right: 10}} />
        </Pressable>
    )
}

const styles = StyleSheet.create({
    infoLinha: {
        paddingVertical: 20,
        flexDirection: "row",
        alignItems: "center",
        borderBottomWidth: 0.75,
        borderBottomColor: paletaCores.cinza.medio,
    },
    infoIcone: {
        fontSize: 20,
        color: paletaCores.cinza.escuro,
        marginRight: 16,
        backgroundColor: paletaCores.primaria.pelicula,
        padding: 12,
        borderRadius: 50,
    },
    infoDescr: {
        color: paletaCores.cinza.escuro,
        fontSize: 20,
    }
})