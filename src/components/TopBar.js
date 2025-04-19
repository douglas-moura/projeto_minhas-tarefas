import { SafeAreaView, StyleSheet, Pressable, Text, Image } from "react-native"
import { layouts, paletaCores } from "../assets/styles/StylesGlobal"
import { useEffect, useState } from "react"
import { getUsuario } from "../functions/getUsuario"
import { localhost } from "../../infos_local"

export default function TopBar({navigation}) {  
    const [usuario, setUsuario] = useState(null)
    
    useEffect(() => {
        const fetchData = async () => {
            const usuarioData = await getUsuario(localhost)
            setUsuario(usuarioData)
        }
        fetchData() 
    }, [])

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