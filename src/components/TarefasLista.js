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
        btnNovaTarefa: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: coresGlobais.primaria.medio,
            //width: "40%",
            padding: 20,
            borderRadius: 6,
            marginTop: 12,
        },
        textoBtnNovatarefa: {
            fontSize: 18,
            fontWeight: 'bold',
            textAlign: 'center',
            color: coresGlobais.branco,
            marginLeft: 6,
        }
    })

    return (
        <SafeAreaView style={{ heigth: 'auto' }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 18 }}>
                <Image style={styles.logoTitulo} source={require('../assets/img/simbolo.png')} />
                <Text style={[estilosGlobais.textoTitulo02, { color: coresGlobais.preto }]}>{tituloLista}</Text>
            </View>
            <ScrollView showsVerticalScrollIndicator={false} style={{ height: '76%' }}>
                {tarefas && tarefas.map((item, index) => (
                    <TarefaListaItem key={index} infosTarefa={item} />
                ))}
            </ScrollView>
            <Pressable style={styles.btnNovaTarefa} onPress={() => navigation.navigate("Nova Tarefa")} >
                <Icon name="plus-circle" color={coresGlobais.branco} size={20} />
                <Text style={styles.textoBtnNovatarefa}>Nova Tarefa</Text>
            </Pressable>
        </SafeAreaView>
    )
}