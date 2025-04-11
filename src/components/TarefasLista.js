import { SafeAreaView, ScrollView, StyleSheet, Image, View, Text, Pressable } from "react-native"
import { layouts, paletaCores } from "../assets/styles/StylesGlobal"
import { useState, useEffect } from "react"
import TarefaListaItem from "./TarefasListaItem"

export default function TarefasLista(props) {
    const [tarefas, setTarefas] = useState(null)
    
    useEffect(() => {
        const getTarefa = async () => {
            try {
                const response = await fetch('http://192.168.15.151:3000/users_tarefas?user_id=0')
                const data = await response.json()
                setTarefas(data[0].tarefas)
            } catch(err) {
                console.error(err)
            }
        }

        getTarefa()
    }, [tarefas])

    return (
        <SafeAreaView>
            <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 14}}>
                <Image style={styles.logoTitulo} source={require('../assets/img/simbolo.png')} />
                <Text style={[layouts.textoTitulo01, {color: paletaCores.cinza.escuro}]}>{props?.tituloLista}</Text>
            </View>
            <ScrollView>
                {tarefas.map((item, index) => (
                    <TarefaListaItem key={index} infosTarefa={item} />
                ))}
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    logoTitulo: {
        width: 32,
        height: 32,
        marginRight: 8,
        transform: [{rotate:'5deg'}],
    }
})