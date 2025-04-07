import { SafeAreaView, StyleSheet, View, Text } from "react-native"
import { layouts, paletaCores } from '../assets/styles/StylesGlobal'

export default function TarefasListaItem(props) {
    return (
        <SafeAreaView style={props.titulo ? styles.item : null}>
            <Text style={layouts.textoParagrafo}>{props?.titulo}</Text>
            <View style={layouts.textoParagrafo}>
                {props.titulo ? <View style={styles.checkbox} /> : null}
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    item: {
        padding: 20,
        marginBottom: 8,
        borderWidth: 0,
        borderColor: paletaCores.cinza.medio,
        borderRadius: 6,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
        elevation: 2,
        margin: 2,
    },
    checkbox: {
        padding: 10,
        borderWidth: 1,
        borderColor: paletaCores.cinza.medio,
        borderRadius: 4,
    }
})