import { Pressable, StyleSheet, View, Text } from "react-native"
import { layouts, paletaCores } from "../assets/styles/StylesGlobal"
import { concluirTarefa } from "../functions/concluirTarefa"
import { formatarData } from "../functions/formatarData"
import { useState } from "react"
import { localhost } from "../../infos_local"
import Icon from "react-native-vector-icons/Feather"

export default function TarefasListaItem(props) {
    const [statusItem, setStatusItem] = useState(props?.infosTarefa.status)

    const atualizarLista = () => {
        setTimeout(() => {
            setStatusItem(!statusItem)
        }, 500)
    }

    return (
        <Pressable style={[styles.tarefa, statusItem ? {backgroundColor: paletaCores.cinza.pelicula} : null]} onPress={() => {
            concluirTarefa("0", props?.infosTarefa.tarefa_id, localhost)
            atualizarLista()
        }}>
            <Text style={[styles.tarefaData, statusItem ? styles.tarefaCheck : null]}>
                {formatarData(props?.infosTarefa.data)}
            </Text>
            <View style={styles.tarefaContent}>
                <View style={{width: '85%', borderWidth: 0}}>
                    <Text style={[layouts.textoTitulo03, styles.tituloTarefa, statusItem ? styles.tarefaCheck : null]}>
                        {props?.infosTarefa.titulo}
                    </Text>
                    <Text style={[styles.tarefaDescr, statusItem ? styles.tarefaCheck : null]}>
                        {props?.infosTarefa.descr}
                    </Text>
                </View>
                <View>
                    <Icon
                        name="check"
                        style={[styles.checkbox, statusItem ? styles.check : styles.noCheck]}
                    />
                </View>
            </View>
            {props?.infosTarefa.tags ?
                <View style={styles.tarefaTags}>
                    <Text style={[styles.tarefaObs, statusItem ? styles.tarefaObsCheck : null]}>
                        {props?.infosTarefa.tags}
                    </Text>
                </View>
            : null}
        </Pressable>
    )
}

const styles = StyleSheet.create({
    tarefa: {
        padding: 20,
        marginBottom: 14,
        borderWidth: 1,
        borderColor: paletaCores.cinza.medio,
        borderRadius: 6,
        backgroundColor: paletaCores.branco,
        //elevation: 2,
        //margin: 2,
    },
    tarefaData: {
        fontSize: 10,
        width: "70%",
        borderBottomWidth: 0.5,
        borderColor: paletaCores.cinza.medio,
        color: paletaCores.cinza.escuro,
        paddingBottom: 6,
    },
    tarefaContent: {
        marginTop: 6,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    tituloTarefa: {
        color: paletaCores.preto,
    },
    tarefaDescr: {
        color: paletaCores.cinza.escuro,
        fontSize: 12,
    },
    tarefaTags: {
        marginTop: 16,
        flexDirection: "row",
    },
    tarefaObs: {
        paddingVertical: 4,
        paddingHorizontal: 8,
        borderRadius: 50,
        fontSize: 10,
        backgroundColor: "#dd0000",
        color: paletaCores.branco,
        alignSelf: 'flex-start',
        fontWeight: 'bold',
        marginRight: 6,
    },
    tarefaCheck: {
        opacity: 0.6,
        color: paletaCores.cinza.medio,
    },
    tarefaObsCheck: {
        backgroundColor: paletaCores.cinza.claro,
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
})