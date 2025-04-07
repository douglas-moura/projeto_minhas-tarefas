import { SafeAreaView, ScrollView, StyleSheet, View, Text } from "react-native"
import TarefaListaItem from "./TarefasListaItem"
import { layouts } from "../assets/styles/StylesGlobal"

export default function TarefasLista() {
    return (
        <View>
            <Text style={layouts.textoTitulo01}>Minhas Tarefas</Text>
            <ScrollView>
                <TarefaListaItem titulo='Dar banho no cachorro' />
                <TarefaListaItem titulo='Comprar uma calça nova' />
                <TarefaListaItem titulo='Atualizar curriculo' />
                <TarefaListaItem titulo='Estudar mais React Native e Expo' />
            </ScrollView>
        </View>
    )
}