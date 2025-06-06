import { View, Text, StyleSheet } from "react-native"
import { paletaCores } from "../assets/styles/StylesGlobal"

export default function Botao({ texto, onPress, estilo }) {
    return (
        <View style={[styles.botao, estilo]}>
            <Text style={styles.texto} onPress={onPress}>
                {texto}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    botao: {
        marginTop: 48,
        padding: 18,
        backgroundColor: paletaCores.primaria.medio,
        borderRadius: 5,
    },
    texto: {
        fontSize: 18,
        color: paletaCores.branco,
        textAlign: 'center',
        fontWeight: 'bold',
    },
})