import { SafeAreaView, ScrollView, StyleSheet, Image, View, Text, Pressable } from "react-native"
import { layouts, paletaCores } from "../assets/styles/StylesGlobal"
import { useState, useEffect } from "react"
import { getTarefas } from "../functions/getTarefas"
import TarefaListaItem from "./TarefasListaItem"

export default function TarefasLista({tituloLista, navigation}) {
    const [tarefas, setTarefas] = useState(null)
    
    useEffect(() => {
        const fetchData = async () => {
            const tarefas = await getTarefas()
            setTarefas(tarefas)
        }
        
        fetchData()
    }, [])

    return (
        <SafeAreaView style={{heigth: 'auto'}}>
            <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 18}}>
                <Image style={styles.logoTitulo} source={require('../assets/img/simbolo.png')} />
                <Text style={[layouts.textoTitulo02, {color: paletaCores.cinza.escuro}]}>{tituloLista}</Text>
            </View>
            <ScrollView showsVerticalScrollIndicator={false} style={{height: '75%'}}>
                {tarefas && tarefas.map((item, index) => (
                    <TarefaListaItem key={index} infosTarefa={item} />
                ))}
            </ScrollView>
            <Pressable style={styles.btnNovaTarefa} onPress={() => navigation.navigate("Nova Tarefa")} >
                <Text style={styles.textoBtnNovatarefa}>Nova Tarefa</Text>
            </Pressable>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    logoTitulo: {
        width: 32,
        height: 32,
        marginRight: 8,
        transform: [{rotate:'5deg'}],
    },
    btnNovaTarefa: {
        backgroundColor: paletaCores.primaria.medio,
        //width: "40%",
        padding: 20,
        borderRadius: 6,
    },
    textoBtnNovatarefa: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        color: paletaCores.branco,
    }
})