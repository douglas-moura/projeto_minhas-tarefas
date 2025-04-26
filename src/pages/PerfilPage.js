import { SafeAreaView, ScrollView, StyleSheet, View, Text, Image } from "react-native"
import { layouts, paletaCores } from '../assets/styles/StylesGlobal'
import { getUsuario } from "../functions/getUsuario"
import { useState } from "react"
import { formatarData } from "../functions/formatarData"
import { localhost } from "../../infos_local"
import Icon from 'react-native-vector-icons/Feather'
import Rodape from "../components/Rodape"
import ItemMenuPerfil from "../components/ItemMenuPerfil"

const menuPerfil = [
    {icone: 'user', texto: 'Dados Pessoais', page: 'PerfilDadosPessoais'},
    {icone: 'bar-chart-2', texto: 'Informações da Conta', page: 'PerfilInformacoes'},
    {icone: 'settings', texto: 'Preferências', page: 'PerfilPreferencias'},
    {icone: 'help-circle', texto: 'Ajuda e Suporte', page: 'PerfilAjuda'},
    {icone: 'log-out', texto: 'Sair', page: 'Login'},
]

export default function PerfilPage({navigation}) {
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
    
    buscarUsuario()

    return (
        <SafeAreaView style={[layouts.pagina, {backgroundColor: paletaCores.primaria.medio}]}>
            <ScrollView>
                <View style={layouts.sessao}>
                    <Text style={[layouts.textoTitulo01, {color: paletaCores.branco}]}>Perfil</Text>
                </View>
                <View style={[layouts.sessao, styles.infoSessao]}>
                    <View style={styles.infoContainer}>
                        <View style={styles.fotoPerfilContainer}>
                            <Icon name="star" style={styles.perfilIcone} />
                            <Image style={styles.fotoPerfil} source={require('../assets/img/foto-perfil.jpg')} />
                        </View>
                        <Text style={[layouts.textoTitulo01, {color: paletaCores.preto}]}>{nome} {sobrenome}</Text>
                        <Text style={styles.infoEmail}>{email}</Text>
                    </View>
                    <View style={styles.infoContainer}>
                        <Text style={[layouts.textoTitulo03, styles.tituloContainer]}>Minha Conta</Text>
                        {menuPerfil && menuPerfil.map((item, index) => (
                            <ItemMenuPerfil
                                key={index}
                                icone={item.icone}
                                texto={item.texto}
                                page={item.page}
                                navigation={navigation}
                            />
                        ))}
                    </View>
                    <Rodape />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    fotoPerfilContainer: {
        position: "relative",
        width: 60,
        height: 60,
        marginBottom: 16,
    },
    fotoPerfil: {
        borderWidth: 0,
        borderColor: paletaCores.branco,
        borderRadius: 200,
        width: "100%",
        height: "100%",
    },
    perfilIcone: {
        position: "absolute",
        fontSize: 14,
        color: paletaCores.branco,
        zIndex: 100,
        padding: 6,
        backgroundColor: 'orange',
        borderWidth: 3,
        top: "-10%",
        left: "75%",
        borderColor: paletaCores.branco,
        borderRadius: 100,
    },
    infoEmail: {
        marginTop: 4,
        color: paletaCores.cinza.escuro,
    },
    infoSessao: {
        height: "100%",
        backgroundColor: paletaCores.branco,
        borderStartStartRadius: 40,
        borderEndStartRadius: 40,
    },
    tituloContainer: {
        marginBottom: 10, 
        color: paletaCores.primaria.medio
    },
    infoContainer: {
        marginBottom: 36,
    },
    infoLinha: {
        paddingVertical: 24,
        flexDirection: "row",
        alignItems: "center",
        borderBottomWidth: 1,
        borderBottomColor: paletaCores.cinza.medio,
    },
    infoIcone: {
        fontSize: 28,
        color: paletaCores.cinza.escuro,
        marginRight: 16,
    },
    infoDescr: {
        color: paletaCores.cinza.escuro,
        fontSize: 20,
    }
})