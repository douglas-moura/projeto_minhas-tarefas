import { SafeAreaView, StyleSheet, View, Text, Image } from "react-native"
import { layouts, paletaCores } from "../assets/styles/StylesGlobal"

export default function TopBar() {
    return (
        <SafeAreaView style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
        }}>
            <Text style={[layouts.textoTitulo02, {color: paletaCores.branco}]}>Olá, Nome</Text>
            <Image style={styles.fotoPerfil} source={require('../assets/img/foto-perfil.jpg')} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    fotoPerfil: {
        height: 40,
        width: 40,
        backgroundColor: paletaCores.branco,
        borderRadius: 50,
    }
})