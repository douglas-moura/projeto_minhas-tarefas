import { SafeAreaView, StyleSheet, View, Text } from "react-native"
import { layouts, paletaCores } from "../assets/styles/StylesGlobal"

export default function TopBar() {
    return (
        <SafeAreaView style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
        }}>
            <Text style={[layouts.textoTitulo02, {color: paletaCores.branco}]}>Olá, Nome</Text>
            <View style={styles.fotoPerfil} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    fotoPerfil: {
        height: 36,
        width: 36,
        backgroundColor: paletaCores.branco,
        borderRadius: '100%'
    }
})