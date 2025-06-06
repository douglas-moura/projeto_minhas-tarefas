import { Pressable, Text, StyleSheet } from 'react-native'
import { paletaCores } from '../assets/styles/StylesGlobal'
import Icon from 'react-native-vector-icons/Feather'

export default function BotaoVoltar({navigation, texto}) {
    return (
        <Pressable onPress={() => navigation.goBack()} style={styles.btnVoltar}>
            <Icon name="arrow-left" style={styles.icone} />
            <Text style={styles.texto}>{texto ? texto : "Voltar"}</Text>
        </Pressable>
    )
}

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
        color: paletaCores.preto,
        fontSize: 22,
        position: 'absolute',
        left: 10,
    },
    texto: {
        color: paletaCores.preto,
        fontWeight: 'bold',
        width: '100%',
        textAlign: 'center',
        fontSize: 24,
    }
})