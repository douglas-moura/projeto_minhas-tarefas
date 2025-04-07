import { SafeAreaView, StyleSheet, View, Text } from "react-native"
import { layouts } from "../assets/styles/StylesGlobal"
import TarefasLista from "../components/TarefasLista"

export default function HomePage() {
    return (
        <SafeAreaView style={[layouts.sessao]}>
            <TarefasLista />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    
})