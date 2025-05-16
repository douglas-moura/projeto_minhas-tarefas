import { SafeAreaView, StyleSheet, View } from "react-native"
import { layouts, paletaCores } from "../assets/styles/StylesGlobal"
import { usuarioLogado } from "../functions/usuarioLogado"
import { useState } from "react"
import TarefasLista from "../components/TarefasLista"
import TopBar from "../components/TopBar"

export default function HomePage({navigation}) {

    const [usuario, setUsuario] = useState(null)

    const user = async () => {
        setUsuario(await usuarioLogado())
    }

    user()
    

    return (
        <SafeAreaView style={layouts.pagina}>
            <View style={[layouts.sessao, {backgroundColor: paletaCores.primaria.medio,}]}>
                <TopBar navigation={navigation} />
            </View>
            <View style={layouts.sessao}>
                <TarefasLista tituloLista='Minha Tarefas' navigation={navigation} />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

})