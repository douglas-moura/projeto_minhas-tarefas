import { Text } from 'react-native'
import { paletaCores } from '../assets/styles/StylesGlobal'

export default function Rodape() {
    return (
        <Text style={{textAlign: 'center', marginTop: 40, color: paletaCores.cinza.escuro, fontSize: 12}}>
            &copy; {new Date().getFullYear()} Minhas Tarefas v0.0.01
        </Text>
    )
}