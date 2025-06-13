import { SafeAreaView, ScrollView, StyleSheet, View, Text, Image } from "react-native"
import { createEstilosGlobais, createPaletaCores } from "../assets/styles"
import { imagensPerfil } from "../helpers/imagensPerfil"
import { useAuth } from "../contexts/AuthContext"
import { usePrefs } from "../contexts/PrefsContext"
import Icon from 'react-native-vector-icons/Feather'
import Rodape from "../components/Rodape"
import ItemMenuPerfil from "../components/ItemMenuPerfil"


export default function PerfilPage({navigation}) {
    const menuPerfil = [
        {icone: 'user', texto: 'Dados Pessoais', page: 'DadosPessoais'},
        {icone: 'bar-chart-2', texto: 'Informações da Conta', page: 'MinhaConta'},
        {icone: 'settings', texto: 'Preferências', page: 'Preferencias'},
        {icone: 'help-circle', texto: 'Ajuda e Suporte', page: 'AjudaSuporte'},
        {icone: 'log-out', texto: 'Sair', page: 'LoginPage'},
    ]
    
    const { usuario } = useAuth()
    const { estadoTemaEscuro } = usePrefs()
    
    const estilosGlobais = createEstilosGlobais(estadoTemaEscuro)
    const coresGlobais = createPaletaCores(estadoTemaEscuro)

    const styles = StyleSheet.create({
        fotoPerfilContainer: {
            position: "relative",
            width: 60,
            height: 60,
            marginRight: 28,
        },
        fotoPerfil: {
            borderWidth: 0,
            borderColor: coresGlobais.branco,
            borderRadius: 200,
            width: "100%",
            height: "100%",
        },
        perfilIcone: {
            position: "absolute",
            fontSize: 14,
            color: coresGlobais.branco,
            zIndex: 100,
            padding: 6,
            backgroundColor: 'orange',
            borderWidth: 3,
            top: "-10%",
            left: "65%",
            borderColor: coresGlobais.branco,
            borderRadius: 100,
        },
        infoEmail: {
            marginTop: 4,
            color: coresGlobais.cinza.escuro,
        },
        infoSessao: {
            height: "100%",
            backgroundColor: coresGlobais.branco,
            borderStartStartRadius: 40,
            borderEndStartRadius: 40,
        },
        tituloContainer: {
            marginBottom: 10, 
            color: coresGlobais.primaria.medio
        },
        infoContainer: {
            marginBottom: 36,
        },
        infoLinha: {
            paddingVertical: 24,
            flexDirection: "row",
            alignItems: "center",
            borderBottomWidth: 1,
            borderBottomColor: coresGlobais.cinza.medio,
        },
        infoIcone: {
            fontSize: 28,
            color: coresGlobais.cinza.escuro,
            marginRight: 16,
        },
        infoDescr: {
            color: coresGlobais.cinza.escuro,
            fontSize: 20,
        }
    })
    
    return (
        <SafeAreaView style={[estilosGlobais.pagina, {backgroundColor: coresGlobais.primaria.medio}]}>
            <ScrollView>
                <View style={estilosGlobais.sessao}>
                    <Text style={[estilosGlobais.textoTitulo01, {color: coresGlobais.branco}]}>Perfil</Text>
                </View>
                <View style={[estilosGlobais.sessao, styles.infoSessao]}>
                    <View style={[styles.infoContainer, {flexDirection: 'row'}]}>
                        <View style={styles.fotoPerfilContainer}>
                            <Icon name="star" style={styles.perfilIcone} />
                            <Image
                                style={styles.fotoPerfil}
                                source={
                                    usuario?.id && imagensPerfil[usuario?.id]
                                        ? imagensPerfil[usuario?.id]
                                        : imagensPerfil.default
                                }
                            />
                        </View>
                        <View>
                            <Text style={[estilosGlobais.textoTitulo02, {color: coresGlobais.preto}]}>{usuario ? `${usuario.nome} ${usuario.sobrenome}` : ''}</Text>
                            <Text style={styles.infoEmail}>Cód. {usuario ? usuario.cod : ''}</Text>
                        </View>
                    </View>
                    <View style={styles.infoContainer}>
                        {/*<Text style={[estilosGlobais.textoTitulo03, styles.tituloContainer]}>Minha Conta</Text>*/}
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
