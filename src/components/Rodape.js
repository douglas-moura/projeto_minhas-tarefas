import { Text } from 'react-native'
import { createEstilosGlobais, createPaletaCores } from '../assets/styles'
import { usePrefs } from '../contexts/PrefsContext'

export default function Rodape() {
    const { estadoTemaEscuro } = usePrefs()
    const estilosGlobais = createEstilosGlobais(estadoTemaEscuro)
    const coresGlobais = createPaletaCores(estadoTemaEscuro)

    return (
        <Text style={[estilosGlobais.textoAl, {textAlign: 'center', marginTop: 40, fontSize: 12}]}>
            &copy; {new Date().getFullYear()} Minhas Tarefas v0.0.01
        </Text>
    )
}