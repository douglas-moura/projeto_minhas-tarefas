import { SafeAreaView, StyleSheet, View, Text } from "react-native"
import { layouts } from "../assets/styles/StylesGlobal"
import TarefasLista from "../components/TarefasLista"

export default function HomePage() {
    return (
        <SafeAreaView style={[layouts.sessao]}>
            <View style={layouts.container}>
                <TarefasLista tituloLista='Minha Tarefas' />
            </View>
            <View style={layouts.container}>
                <TarefasLista tituloLista='Conluídas' />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    
})