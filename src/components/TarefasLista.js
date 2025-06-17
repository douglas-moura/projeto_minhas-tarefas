import { SafeAreaView, ScrollView, StyleSheet, Image, View, Text, Pressable } from "react-native"
import { createEstilosGlobais, createPaletaCores } from "../assets/styles"
import { useState, useEffect } from "react"
import { buscarTarefas } from "../functions/buscarTarefas"
import { localhost_ip } from "../helpers/localhost"
import { usePrefs } from "../contexts/PrefsContext"
import TarefaListaItem from "./TarefasListaItem"
import Icon from "react-native-vector-icons/Feather"

export default function TarefasLista({ tituloLista, navigation }) {
    const [tarefas, setTarefas] = useState(null)
    const { estadoTemaEscuro } = usePrefs()
    const estilosGlobais = createEstilosGlobais(estadoTemaEscuro)
    const coresGlobais = createPaletaCores(estadoTemaEscuro)
    

    useEffect(() => {
        const fetchData = async () => {
            const tarefasLista = await buscarTarefas(localhost_ip)
            setTarefas(tarefasLista)
        }
        fetchData()
    }, [tarefas])

    const styles = StyleSheet.create({
        logoTitulo: {
            width: 32,
            height: 32,
            marginRight: 8,
            transform: [{ rotate: '5deg' }],
        },
    })

    return (
        <SafeAreaView style={{ heigth: 'auto' }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 18 }}>
                <Image style={styles.logoTitulo} source={require('../assets/img/simbolo.png')} />
                <Text style={[estilosGlobais.textoTitulo02, { color: coresGlobais.cores.textoDefault }]}>{tituloLista}</Text>
            </View>
            <ScrollView showsVerticalScrollIndicator={false} style={{ height: '75%' }}>
                {tarefas && tarefas.map((item, index) => (
                    <TarefaListaItem key={index} infosTarefa={item} />
                ))}
            </ScrollView>
            <Pressable style={[estilosGlobais.btn, estilosGlobais.btnPrimario, { marginTop: 12 }]} onPress={() => navigation.navigate("Nova Tarefa")} >
                <View style={estilosGlobais.iconeContainer}>
                    <Icon name="plus-circle" style={estilosGlobais.iconeAlt} size={20} />
                </View>
                <Text style={[styles.textoBtnNovatarefa, estilosGlobais.btnTextoPrimario]}>Nova Tarefa</Text>
            </Pressable>
        </SafeAreaView>
    )
}