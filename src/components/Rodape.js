import { Text } from 'react-native'
import { createPaletaCores } from '../assets/styles'
import { usePrefs } from '../contexts/PrefsContext'

export default function Rodape() {
    const { estadoTemaEscuro } = usePrefs()
    const coresGlobais = createPaletaCores(estadoTemaEscuro)

    return (
        <Text style={{textAlign: 'center', marginTop: 40, color: coresGlobais.cinza.escuro, fontSize: 12}}>
            &copy; {new Date().getFullYear()} Minhas Tarefas v0.0.01
        </Text>
    )
}