import { View, TouchableOpacity } from "react-native"
import { paletaCores } from "../assets/styles/stylesGlobal"

export default function BotaoToggle({  }) {
    return (
        <TouchableOpacity
            activeOpacity={1}
            onPress={() => acoes[item.acao]?.()}
            style={[
                styles.toggleContainer,
                estadoTemaEscuro && item.acao === 'alternarTema' ? { justifyContent: 'flex-start' } : { justifyContent: 'flex-end' }
            ]}
        >
            <View style={styles.toggleBotao}></View>
        </TouchableOpacity>
    )
}