import { Pressable, StyleSheet, View, Text } from "react-native"
import { layouts, paletaCores } from '../assets/styles/StylesGlobal'
import { useState } from "react"
import Icon from 'react-native-vector-icons/Feather'

export default function TarefasListaItem(props) {
    const [status, setStatus] = useState(false)

    const concluirTarefa = () => {
        console.log(props.infosTarefa)
        return setStatus(status == true)
    }

    return (
        <Pressable style={styles.item} onPress={concluirTarefa}>
            <View>
                <Text style={[layouts.textoParagrafo, props?.infosTarefa.status ? styles.tarefaCheck : null]}>{props?.infosTarefa.titulo}</Text>
                <Text style={styles.tarefaDescr}>{props?.infosTarefa.data}</Text>
            </View>
            <View style={layouts.textoParagrafo}>
                <Icon
                    name="check"
                    style={[
                        styles.checkbox, 
                        props?.infosTarefa.status ? styles.check : styles.noCheck
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
        borderColor: paletaCores.cinza.medio,
        borderRadius: 6,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
        //elevation: 2,
        //margin: 2,
    },
    tarefaCheck: {
        opacity: 0.2,
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
        borderColor: paletaCores.cinza.medio,
    },
    tarefaDescr: {
        color: paletaCores.primaria.medio,
        fontSize: 12,
    }
})