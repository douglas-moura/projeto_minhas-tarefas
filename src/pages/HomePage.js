import { SafeAreaView, StyleSheet, View, Image, Text } from "react-native"
import { layouts, paletaCores } from "../assets/styles/StylesGlobal"
import TarefasLista from "../components/TarefasLista"
import TopBar from "../components/TopBar"

export default function HomePage() {
    return (
        <SafeAreaView style={layouts.pagina}>
            <View style={[layouts.sessao, {backgroundColor: paletaCores.primaria.medio,}]}>
                <TopBar />
            </View>
            <View style={layouts.sessao}>
                <TarefasLista tituloLista='Minha Tarefas' />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

})