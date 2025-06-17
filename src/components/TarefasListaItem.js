import { Pressable, StyleSheet, View, Text } from "react-native"
import { createEstilosGlobais, createPaletaCores } from "../assets/styles"
import { concluirTarefa } from "../functions/concluirTarefa"
import { formatarData } from "../functions/formatarData"
import { useState } from "react"
import { usePrefs } from "../contexts/PrefsContext"
import { localhost_ip } from "../helpers/localhost"
import Icon from "react-native-vector-icons/FontAwesome5"

export default function TarefasListaItem(props) {
    const [statusItem, setStatusItem] = useState(props?.infosTarefa.status)
    const { estadoTemaEscuro } = usePrefs()
    const estilosGlobais = createEstilosGlobais(estadoTemaEscuro)
    const coresGlobais = createPaletaCores(estadoTemaEscuro)

    const atualizarLista = () => {
        setTimeout(() => {
            setStatusItem(!statusItem)
        }, 500)
    }

    const styles = StyleSheet.create({
        tarefa: {
            padding: 20,
            marginBottom: 14,
            borderWidth: 1,
            borderRadius: 6,
            //elevation: 2,
            //margin: 2,
            borderColor: coresGlobais.cores.borda,
            backgroundColor: coresGlobais.cores.backgroundDefault,
        },
        tarefaData: {
            fontSize: 10,
            width: "70%",
            borderBottomWidth: 0.5,
            paddingBottom: 6,
            borderColor: coresGlobais.cores.borda,
        },
        tarefaContent: {
            marginTop: 6,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
        },
        tituloTarefa: {
        },
        tarefaDescr: {
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
            alignSelf: 'flex-start',
            fontWeight: 'bold',
            marginRight: 6,
        },
        tarefaCheck: {
            opacity: 0.2,
        },
        tarefaObsCheck: {
            opacity: 1,
        },
        checkboxContainer: {
            width: 30,
            height: 30,
            alignItems: 'center',
            justifyContent: 'center',   
            borderWidth: 1,
            borderColor: coresGlobais.cores.borda,
        },
        checkboxContainerCheck: {
            backgroundColor: coresGlobais.cores.backgroundDestaque,
            borderColor: coresGlobais.cores.backgroundDestaque,
        },
        checkbox: {
            fontSize: 16,
            padding: 4,
            borderColor: coresGlobais.cores.borda,
            color: coresGlobais.cores.backgroundDefault,
        },
    })

    return (
        <Pressable style={[styles.tarefa, statusItem ? {borderWidth: 0.25} : null]} onPress={() => {
            concluirTarefa("0", props?.infosTarefa.tarefa_id, localhost_ip)
            atualizarLista()
        }}>
            <Text style={[styles.tarefaData, {color: coresGlobais.cores.textoDefault}, statusItem ? styles.tarefaCheck : null]}>
                {formatarData(props?.infosTarefa.data)}
            </Text>
            <View style={styles.tarefaContent}>
                <View style={[{ width: '85%', borderWidth: 0 }, statusItem ? styles.tarefaCheck : null]}>
                    <Text style={[estilosGlobais.textoTitulo03, {color: coresGlobais.cores.textoDefault}]}>
                        {props?.infosTarefa.titulo}
                    </Text>
                    <Text style={[styles.tarefaDescr, styles.tituloTarefa, {color: coresGlobais.cores.textoDefault}]}>
                        {props?.infosTarefa.descr}
                    </Text>
                </View>
                <View style={[styles.checkboxContainer, estilosGlobais.iconeContainer, statusItem ? styles.checkboxContainerCheck : null]}>
                    <Icon name="check" style={[styles.checkbox, statusItem ? styles.check : styles.noCheck]} />
                </View>
            </View>
        </Pressable>
    )
}