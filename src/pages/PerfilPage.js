import { SafeAreaView, ScrollView, StyleSheet, View, Text, Image } from "react-native"
import { layouts, paletaCores } from '../assets/styles/StylesGlobal'
import { useAuth } from "../contexts/AuthContext"
import Icon from 'react-native-vector-icons/Feather'
import Rodape from "../components/Rodape"
import ItemMenuPerfil from "../components/ItemMenuPerfil"
import { imagensPerfil } from "../helpers/imagensPerfil"

const menuPerfil = [
    {icone: 'user', texto: 'Dados Pessoais', page: 'DadosPessoais'},
    {icone: 'bar-chart-2', texto: 'Informações da Conta', page: 'MinhaConta'},
    {icone: 'settings', texto: 'Preferências', page: 'Preferencias'},
    {icone: 'help-circle', texto: 'Ajuda e Suporte', page: 'AjudaSuporte'},
    {icone: 'log-out', texto: 'Sair', page: 'LoginPage'},
]

export default function PerfilPage({navigation}) {
    const { usuario } = useAuth()
    console.log(usuario.fotoUrl)
    
    return (
        <SafeAreaView style={[layouts.pagina, {backgroundColor: paletaCores.primaria.medio}]}>
            <ScrollView>
                <View style={layouts.sessao}>
                    <Text style={[layouts.textoTitulo01, {color: paletaCores.branco}]}>Perfil</Text>
                </View>
                <View style={[layouts.sessao, styles.infoSessao]}>
                    <View style={[styles.infoContainer, {flexDirection: 'row'}]}>
                        <View style={styles.fotoPerfilContainer}>
                            <Icon name="star" style={styles.perfilIcone} />
                            <Image
                                style={styles.fotoPerfil}
                                source={
                                    usuario?.id && imagensPerfil[usuario?.id]
                                        ? imagensPerfil[usuario?.id]
                                        : require('../assets/img/users-perfil/default.jpg')
                                }
                            />
                        </View>
                        <View>
                            <Text style={[layouts.textoTitulo02, {color: paletaCores.preto}]}>{usuario ? `${usuario.nome} ${usuario.sobrenome}` : ''}</Text>
                            <Text style={styles.infoEmail}>Cód. {usuario ? usuario.cod : ''}</Text>
                        </View>
                    </View>
                    <View style={styles.infoContainer}>
                        {/*<Text style={[layouts.textoTitulo03, styles.tituloContainer]}>Minha Conta</Text>*/}
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
        marginRight: 28,
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
        left: "65%",
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