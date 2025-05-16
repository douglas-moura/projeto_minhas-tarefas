import { SafeAreaView, StyleSheet, Pressable, Text, Image } from "react-native"
import { layouts, paletaCores } from "../assets/styles/StylesGlobal"
import { useEffect, useState } from "react"
import { usuarioLogado } from "../functions/usuarioLogado"

export default function TopBar({navigation}) {  
    const [usuario, setUsuario] = useState(null)
    
    const fetchData = async () => {
        setUsuario(await usuarioLogado())
    }
    fetchData()

    return (
        <SafeAreaView style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
        }}>
            <Text style={[layouts.textoTitulo03, {color: paletaCores.branco}]}>
                Olá, {usuario ? usuario.nome : 'Usuário'}
            </Text>
            <Pressable onPress={() => navigation.navigate("Perfil")}>
                <Image style={styles.fotoPerfil} source={require('../assets/img/foto-perfil.jpg')} />
            </Pressable>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    fotoPerfil: {
        height: 40,
        width: 40,
        backgroundColor: paletaCores.branco,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: paletaCores.branco,
    }
})