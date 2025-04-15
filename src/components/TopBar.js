import { SafeAreaView, StyleSheet, Pressable, Text, Image } from "react-native"
import { layouts, paletaCores } from "../assets/styles/StylesGlobal"
import { useEffect, useState } from "react"

export default function TopBar({navigation}) {  
    const [usuarioData, setUsuarioData] = useState(null)

    useEffect(() => {
        const getUsuario = async () => {
            try {
                const response = await fetch('http://192.168.15.151:3000/usuarios')
                const data = await response.json()
                setUsuarioData(data)        
            } catch(err) {
                console.error(err)
            }
        }

        getUsuario()
    }, [])

    return (
        <SafeAreaView style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
        }}>
            <Text style={[layouts.textoTitulo03, {color: paletaCores.branco}]}>
                Olá, {usuarioData ? usuarioData[0].nome : 'Usuário'}
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