import { useState } from "react"
import { SafeAreaView, View, TextInput, Text, StyleSheet, TouchableOpacity, Image } from "react-native"
import { autenticarUsuario } from "../functions/autenticarUsuario"
import { useAuth } from "../contexts/AuthContext"
import { usePrefs } from "../contexts/PrefsContext"
import { createEstilosGlobais, createPaletaCores } from "../assets/styles"
import AsyncStorage from "@react-native-async-storage/async-storage"
import Rodape from "../components/Rodape"

export default function LoginPage({ navigation }) {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const { login } = useAuth()
    const { estadoTemaEscuro } = usePrefs()
    const estilosGlobais = createEstilosGlobais(estadoTemaEscuro)
    const coresGlobais = createPaletaCores(estadoTemaEscuro)

    const logar = async () => {
        try {
            const usuarioEncontrado = await autenticarUsuario(email, senha)
            if (!usuarioEncontrado) {
                console.log('Usuário não encontrado')
                return
            } else {
                // Salva os dados do usuário no AsyncStorage
                await AsyncStorage.setItem('@usuario', JSON.stringify({
                    id: usuarioEncontrado.id,
                    cod: usuarioEncontrado.cod
                }))
                login() // Chama a função de login do contexto
                console.log('Entrar no App')
            }
        } catch (error) {
            console.error('Erro ao salvar dados:', error)
        }
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

    return (
        <SafeAreaView style={[estilosGlobais.pagina, { paddingTop: 64 }]}>
            <View style={estilosGlobais.sessao}>
                <Image style={styles.logoLogin} source={require('../assets/img/simbolo.png')} />
            </View>
            <View style={[estilosGlobais.sessao, styles.inputsContainer]}>
                <Text style={[estilosGlobais.textoTitulo02, { marginBottom: 18 }]}>Bem-vindo! Fazer login</Text>
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
                <TouchableOpacity style={[estilosGlobais.btn, estilosGlobais.btnPrimario, { width: '100%' }]} onPress={() => logar()}>
                    <Text style={{ color: coresGlobais.branco }}>Entrar</Text>
                </TouchableOpacity>
            </View>
            <Rodape />
        </SafeAreaView>
    )
}