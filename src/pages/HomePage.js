import { SafeAreaView, StyleSheet, View } from "react-native"
import { layouts, paletaCores } from "../assets/styles/StylesGlobal"
import { useAuth } from "../contexts/AuthContext"
import TarefasLista from "../components/TarefasLista"
import TopBar from "../components/TopBar"

export default function HomePage({navigation}) {
    const { usuario } = useAuth()    

    return (
        <SafeAreaView style={layouts.pagina}>
            <View style={[layouts.sessao, {backgroundColor: paletaCores.primaria.medio,}]}>
                <TopBar navigation={navigation} usuario={usuario} />
            </View>
            <View style={layouts.sessao}>
                <TarefasLista tituloLista='Minha Tarefas' navigation={navigation} />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

})