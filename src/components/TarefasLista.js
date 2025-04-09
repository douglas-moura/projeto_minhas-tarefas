import { SafeAreaView, ScrollView, StyleSheet, Image, View, Text } from "react-native"
import { layouts, paletaCores } from "../assets/styles/StylesGlobal"
import TarefaListaItem from "./TarefasListaItem"

const tarefas = [
    {id: '0', titulo: 'Dar banho no cachorro', status: true, data: '22/01/25'},
    {id: '1', titulo: 'Comprar uma calça nova', status: false, data: '18/02/25'},
    {id: '2', titulo: 'Atualizar curriculo', status: false, data: '02/03/25'},
    {id: '3', titulo: 'Estudar mais React Native e Expo', status: false, data: '20/03/25'},
]

export default function TarefasLista(props) {
    return (
        <SafeAreaView>
            <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 14}}>
                <Image style={styles.logoTitulo} source={require('../assets/img/simbolo.png')} />
                <Text style={[layouts.textoTitulo01, {color: paletaCores.cinza.escuro}]}>{props?.tituloLista}</Text>
            </View>
            <ScrollView>
                {tarefas.map((item, index) => (
                    <TarefaListaItem key={index} status={item.status} titulo={item.titulo} />
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