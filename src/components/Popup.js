import { View, Text, StyleSheet } from "react-native"
import { usePrefs } from "../contexts/PrefsContext"
import { createEstilosGlobais, createPaletaCores } from "../assets/styles"
import Icon from "react-native-vector-icons/Feather"

export default function Popup(tipo, msg) {
    const { estadoTemaEscuro } = usePrefs()
    const estilosGlobais = createEstilosGlobais(estadoTemaEscuro)
    const coresGlobais = createPaletaCores(estadoTemaEscuro)

    const styles = StyleSheet.create({
        popupContainer: {
            position: 'absolute',
            top: 20,
            width: '100%',
        },
        popupConteudo: {
            backgroundColor: tipo == 'aviso' ? coresGlobais.cores.aviso :  coresGlobais.cores.sucesso,
            padding: 20,
            borderRadius: 10,
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
        },
    })
    
    return (
        <View style={[estilosGlobais.sessao, styles.popupContainer]}>
            <View style={styles.popupConteudo}>
                <Icon name={tipo == 'aviso' ? 'alert-triangle' : 'check-circle'} size={24} color="white" />
                <Text style={{ color: 'white', fontSize: 18 }}>{msg}</Text>
            </View>
        </View>
    )
}