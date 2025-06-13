import { View, Text, StyleSheet } from "react-native"
import { createPaletaCores } from "../assets/styles"
import { usePrefs } from "../contexts/PrefsContext"

export default function Botao({ texto, onPress, estilo }) {
    const { estadoTemaEscuro } = usePrefs()
    const coresGlobais = createPaletaCores(estadoTemaEscuro)

    const styles = StyleSheet.create({
        botao: {
            marginTop: 48,
            padding: 18,
            backgroundColor: coresGlobais.primaria.medio,
            borderRadius: 5,
        },
        texto: {
            fontSize: 18,
            color: coresGlobais.branco,
            textAlign: 'center',
            fontWeight: 'bold',
        },
    })

    return (
        <View style={[styles.botao, estilo]}>
            <Text style={styles.texto} onPress={onPress}>
                {texto}
            </Text>
        </View>
    )
}
