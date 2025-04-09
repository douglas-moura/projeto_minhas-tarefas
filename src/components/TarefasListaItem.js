import { Pressable, StyleSheet, View, Text } from "react-native"
import { layouts, paletaCores } from '../assets/styles/StylesGlobal'
import Icon from 'react-native-vector-icons/Feather'

export default function TarefasListaItem(props) {
    return (
        <Pressable style={styles.item}>
            <Text style={[layouts.textoParagrafo, props.status ? styles.tarefaCheck : null]}>{props?.titulo}</Text>
            <View style={layouts.textoParagrafo}>
                <Icon
                    name="check"
                    style={[
                        styles.checkbox, 
                        props?.status ? styles.check : styles.noCheck
                    ]}
                />
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    item: {
        padding: 20,
        marginBottom: 12,
        borderWidth: 1,
        borderColor: paletaCores.cinza.claro,
        borderRadius: 6,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
        //elevation: 2,
        //margin: 2,
    },
    tarefaCheck: {
        opacity: 0.3,
    },
    checkbox: {
        fontSize: 16,
        padding: 4,
        borderWidth: 1,
        borderRadius: 4,
        color: paletaCores.branco,
    },
    check: {
        borderColor: paletaCores.primaria.medio,
        backgroundColor: paletaCores.primaria.medio,
    },
    noCheck: {
        backgroundColor: paletaCores.branco,
        borderColor: paletaCores.cinza.claro,
    }
})