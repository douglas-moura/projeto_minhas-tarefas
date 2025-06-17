import { SafeAreaView, View } from "react-native"
import { useAuth } from "../contexts/AuthContext"
import { createEstilosGlobais, createPaletaCores } from "../assets/styles"
import { usePrefs } from "../contexts/PrefsContext"
import TarefasLista from "../components/TarefasLista"
import TopBar from "../components/TopBar"

export default function HomePage({ navigation }) {
    const { usuario } = useAuth()
    const { estadoTemaEscuro } = usePrefs()
    const estilosGlobais = createEstilosGlobais(estadoTemaEscuro)

    return (
        <SafeAreaView style={estilosGlobais.pagina}>
            <View style={[estilosGlobais.sessaoDestaque]}>
                <TopBar navigation={navigation} usuario={usuario} />
            </View>
            <View style={estilosGlobais.sessao}>
                <TarefasLista tituloLista='Minha Tarefas' navigation={navigation} />
            </View>
        </SafeAreaView>
    )
}