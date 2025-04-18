import { SafeAreaView, ScrollView, StyleSheet, View, Text, Image } from "react-native"
import { layouts, paletaCores } from '../assets/styles/StylesGlobal'
import { getUsuario } from "../functions/getUsuario"
import { useState } from "react"
import { formatarData } from "../functions/formatarData"
import { localhost } from "../../infos_local"
import Icon from 'react-native-vector-icons/Feather'

export default function PerfilPage() {

    const [nome, setNome] = useState(null)
    const [sobrenome, setSobrenome] = useState(null)
    const [email, setEmail] = useState(null)
    const [idade, setIdade] = useState(null)
    const [sexo, setSexo] = useState(null)
    const [tel, setTel] = useState(null)

    const buscarUsuario = async () => {
        const usuario = await getUsuario(localhost)
        if(usuario) {
            setNome(usuario.nome)
            setSobrenome(usuario.sobrenome)
            setEmail(usuario.email)
            setIdade(formatarData(usuario.nasc))
            setSexo(definirGenero(usuario.genero))
            setTel(usuario.tel)
        }        
    }

    const definirGenero = (num) => {
        switch (num) {
            case 0:
                return "Feminino"
                break
            case 1:
                return "Masculino"
                break
        
            default:
                return "Não informado"
                break
        }
    }
    
    buscarUsuario()

    return (
        <SafeAreaView style={layouts.pagina}>
            <ScrollView>
                <View style={[layouts.sessao, styles.sessaoFotoPerfil]}>
                    <View style={{position: 'relative', width: 180, height: 180}}>
                        <Icon name="star" style={styles.perfilIcone} />
                        <Image style={styles.fotoPerfil} source={require('../assets/img/foto-perfil.jpg')} />
                    </View>
                </View>
                <View style={layouts.sessao}>
                    <Text style={[layouts.textoTitulo01, {textAlign: 'center'}]}>{nome} {sobrenome}</Text>
                    <Text style={styles.infoEmail}>{email}</Text>
                    <View style={styles.infoContainer}>
                        <Text style={[layouts.textoTitulo03, {marginBottom: 10}]}>Informações Pessoais</Text>
                        <View style={styles.infoLinha}>
                            <Text style={styles.infoDescr}>Nascimento:</Text>
                            <Text style={{color: paletaCores.cinza.escuro}}>{idade}</Text>
                        </View>
                        <View style={styles.infoLinha}>
                            <Text style={styles.infoDescr}>Telefone:</Text>
                            <Text style={{color: paletaCores.cinza.escuro}}>{tel}</Text>
                        </View>
                        <View style={styles.infoLinha}>
                            <Text style={styles.infoDescr}>Gênero:</Text>
                            <Text style={{color: paletaCores.cinza.escuro}}>{sexo}</Text>
                        </View>
                    </View>
                    <View style={styles.infoContainer}>
                    <Text style={[layouts.textoTitulo03, {marginBottom: 10}]}>Dados da Conta</Text>
                        <Text>Teste</Text>
                        <Text>Teste</Text>
                        <Text>Teste</Text>
                        <Text>Teste</Text>
                        <Text>Teste</Text>
                        <Text>Teste</Text>
                        <Text>Teste</Text>
                        <Text>Teste</Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    sessaoFotoPerfil: {
        backgroundColor: paletaCores.primaria.medio,
        height: 250,
        borderWidth: 0,
        borderColor: "red",
        alignItems: "center",
        justifyContent: "center"
    },
    fotoPerfil: {
        borderWidth: 4,
        borderColor: paletaCores.branco,
        borderRadius: 200,
        width: 180,
        height: 180,
    },
    perfilIcone: {
        position: 'absolute',
        fontSize: 18,
        color: paletaCores.branco,
        zIndex: 100,
        padding: 8,
        backgroundColor: 'orange',
        borderWidth: 3,
        top: 10,
        left: 135,
        borderColor: paletaCores.branco,
        borderRadius: 100,
    },
    infoEmail: {
        marginTop: 4,
        marginBottom: 28,
        textAlign: "center",
        color: paletaCores.primaria.medio,
        fontSize: 16
    },
    infoContainer: {
        marginVertical: 12,
        padding: 24,
        borderRadius: 6,
        borderWidth: 0.5,
        borderColor: paletaCores.cinza.escuro,
    },
    infoLinha: {
        flexDirection: "row",
        marginVertical: 6,
    },
    infoDescr: {
        fontWeight: "bold",
        marginRight: 6,
        width: 80,
    }
})