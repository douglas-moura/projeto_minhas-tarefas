import { Pressable, Text, StyleSheet } from "react-native"
import { paletaCores } from "../assets/styles/StylesGlobal"
import Icon from 'react-native-vector-icons/Feather'

export default function BotaoVoltar({navigation}) {
    return (
        <Pressable onPress={() => navigation.goBack()} style={styles.btnVoltar}>
            <Icon name="arrow-left" style={styles.icone} />
            <Text style={styles.texto}>Voltar</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    btnVoltar: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 0,
        padding: 10,
        borderRadius: 8,
        marginBottom: 20,
        alignSelf: 'flex-start',
    },
    icone: {
        marginRight: 24,
        color: paletaCores.cinza.escuro,
        fontSize: 22,
    },
    texto: {
        color: paletaCores.cinza.escuro,
        fontWeight: 'bold',
        fontSize: 18,
    }
})