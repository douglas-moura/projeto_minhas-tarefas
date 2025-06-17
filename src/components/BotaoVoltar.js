import { Pressable, Text, StyleSheet } from 'react-native'
import { createPaletaCores } from "../assets/styles"
import { usePrefs } from '../contexts/PrefsContext'
import Icon from 'react-native-vector-icons/Feather'

export default function BotaoVoltar({ navigation, texto }) {
    const { estadoTemaEscuro } = usePrefs()
    const coresGlobais = createPaletaCores(estadoTemaEscuro)

    const styles = StyleSheet.create({
        btnVoltar: {
            flexDirection: 'row',
            alignItems: 'center',
            borderWidth: 0,
            width: '100%',
            padding: 10,
            borderRadius: 8,
            marginBottom: 20,
            alignSelf: 'flex-start',
        },
        icone: {
            color: coresGlobais.cores.textoDefault,
            fontSize: 22,
            position: 'absolute',
            left: 10,
        },
        texto: {
            color: coresGlobais.cores.textoDefault,
            fontWeight: 'bold',
            width: '100%',
            textAlign: 'center',
            fontSize: 24,
        }
    })

    return (
        <Pressable onPress={() => navigation.goBack()} style={styles.btnVoltar}>
            <Icon name="arrow-left" style={styles.icone} />
            <Text style={styles.texto}>{texto ? texto : "Voltar"}</Text>
        </Pressable>
    )
}