import { useState } from "react"
import { SafeAreaView, View, TextInput, Text, StyleSheet, TouchableOpacity, Image } from "react-native"
import { layouts, paletaCores } from "../assets/styles/StylesGlobal"
import { autenticarUsuario } from "../functions/autenticarUsuario"
import { useAuth } from "../contexts/AuthContext"
import AsyncStorage from "@react-native-async-storage/async-storage"
import Rodape from "../components/Rodape"

export default function LoginPage({ navigation }) {
    const { usuario } = useAuth()
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    
    const { login } = useAuth()

    const logar = async () => {
        try {
            const usuarioEncontrado = await autenticarUsuario(email, senha)
            if (!usuarioEncontrado) {
                console.log('Usuário não encontrado')
                return
            } else {
                await AsyncStorage.setItem('@usuario', JSON.stringify({ id: usuarioEncontrado.id, cod: usuarioEncontrado.cod }))
                login() // Chama a função de login do contexto
                console.log('Entrar no App')
            }
        } catch (error) {
            console.error('Erro ao salvar dados:', error)
        }
    }

    return (
        <SafeAreaView style={[layouts.pagina, { paddingTop: 64 }]}>
            <View style={layouts.sessao}>
                <Image style={styles.logoLogin} source={require('../assets/img/simbolo.png')} />
            </View>
            <View style={[layouts.sessao, styles.inputsContainer]}>
                <Text style={[layouts.textoTitulo02, { marginBottom: 18 }]}>Bem-vindo! Fazer login</Text>
                <TextInput
                    style={styles.inputLogin}
                    placeholder="nome.sobrenome@email.com"
                    value={email}
                    onChangeText={setEmail}
                />
                <TextInput
                    style={styles.inputLogin}
                    placeholder="********"
                    value={senha}
                    onChangeText={setSenha}
                    secureTextEntry={true}
                />
                <TouchableOpacity style={[layouts.btn, layouts.btnPrimario, { width: '100%' }]} onPress={() => logar()}>
                    <Text style={{ color: paletaCores.branco }}>Entrar</Text>
                </TouchableOpacity>
            </View>
            <Rodape />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    logoLogin: {
        width: 120,
        height: 120,
        marginVertical: 20,
        marginHorizontal: 'auto',
        transform: [{ rotate: '5deg' }],
    },
    inputsContainer: {
        paddingHorizontal: 32,
    },
    inputLogin: {
        width: '100%',
        height: 50,
        backgroundColor: '#fff',
        borderRadius: 6,
        paddingHorizontal: 16,
        marginBottom: 12,
        borderWidth: 1,
        borderColor: '#ccc',
    },
})