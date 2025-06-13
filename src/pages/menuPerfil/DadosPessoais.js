import { useState } from 'react'
import { SafeAreaView, View, Text, Image, StyleSheet } from 'react-native'
import { createEstilosGlobais, createPaletaCores } from '../../assets/styles'
import { definirGenero } from '../../functions/definirGenero'
import { formatarData } from '../../functions/formatarData'
import { useAuth } from '../../contexts/AuthContext'
import { usePrefs } from '../../contexts/PrefsContext'
import { imagensPerfil } from '../../helpers/imagensPerfil'
import Icon from 'react-native-vector-icons/Feather'
import BotaoVoltar from '../../components/BotaoVoltar'
import Rodape from '../../components/Rodape'

export default function DadosPessoais({ navigation }) {
    const { usuario } = useAuth()
    const { estadoTemaEscuro } = usePrefs()
    const estilosGlobais = createEstilosGlobais(estadoTemaEscuro)
    const coresGlobais = createPaletaCores(estadoTemaEscuro)

    const [nome, setNome] = useState(usuario ? usuario.nome : null)
    const [sobrenome, setSobrenome] = useState(usuario ? usuario.sobrenome : null)
    const [email, setEmail] = useState(usuario ? usuario.email : null)
    const [nasc, setNasc] = useState(usuario ? formatarData(usuario.nasc) : null)
    const [sexo, setSexo] = useState(usuario ? definirGenero(usuario.genero) : null)
    const [tel, setTel] = useState(usuario ? usuario.tel : null)
    const [senha, setSenha] = useState(usuario ? usuario.senha : null)
    const [visibilidadeSenha, setVisibilidadeSenha] = useState(false)

    const styles = StyleSheet.create({
        imagemUsuarioContainer: {
            alignItems: 'center',
            marginBottom: 16,
            marginHorizontal: 'auto',
            width: 120,
            height: 120,
        },
        imagemUsuario: {
            borderRadius: 100,
            width: '100%',
            height: '100%',
        },
        iconeEditImagemPerfil: {
            position: 'absolute',
            fontSize: 16,
            bottom: 10,
            right: 5,
            backgroundColor: coresGlobais.branco,
            borderRadius: 50,
            padding: 6,
            elevation: 2,
        },
        infoLinha: {
            paddingVertical: 8,
        },
        infoLinhaDescr: {
            fontSize: 20,
            fontWeight: 'bold',
            marginBottom: 4,
        },
        infoLinhaValorContainer: {
            justifyContent: 'space-between',
            flexDirection: 'row',
            paddingHorizontal: 16,
            paddingVertical: 18,
            borderRadius: 8,
            backgroundColor: coresGlobais.cinza.pelicula,
        },
        infoLinhaValor: {
            color: coresGlobais.cinza.escuro,
            fontSize: 16,
        }
    })

    return (
        <SafeAreaView style={estilosGlobais.pagina}>
            <View style={estilosGlobais.sessao}>
                <BotaoVoltar navigation={navigation} texto="Meus Dados" />
                <View style={styles.imagemUsuarioContainer}>
                    <Image
                        style={styles.imagemUsuario}
                        source={
                            usuario?.id && imagensPerfil[usuario?.id]
                                ? imagensPerfil[usuario?.id]
                                : imagensPerfil.default
                        }
                    />
                    <Icon name="camera" style={styles.iconeEditImagemPerfil} />
                </View>
                <View style={styles.infoLinha}>
                    <Text style={styles.infoLinhaDescr}>Nome</Text>
                    <View style={styles.infoLinhaValorContainer}>
                        <Text style={styles.infoLinhaValor}>{`${nome ? nome : 'Não informado'} ${sobrenome ? sobrenome : ''}`}</Text>
                    </View>
                </View>
                <View style={styles.infoLinha}>
                    <Text style={styles.infoLinhaDescr}>E-mail</Text>
                    <View style={styles.infoLinhaValorContainer}>
                        <Text style={styles.infoLinhaValor}>{email ? email : 'Não informado'}</Text>
                    </View>
                </View>
                <View style={styles.infoLinha}>
                    <Text style={styles.infoLinhaDescr}>Senha</Text>
                    <View style={styles.infoLinhaValorContainer}>
                        <Text style={styles.infoLinhaValor}>
                            {visibilidadeSenha ? (senha ? senha : 'Não informado') : <Text>********</Text>}
                        </Text>
                        <Icon
                            name={visibilidadeSenha ? "eye" : "eye-off"}
                            size={16}
                            color={coresGlobais.cinza.escuro}
                            onPress={() => setVisibilidadeSenha(!visibilidadeSenha)}
                        />
                    </View>
                </View>
                <View style={styles.infoLinha}>
                    <Text style={styles.infoLinhaDescr}>Telefone</Text>
                    <View style={styles.infoLinhaValorContainer}>
                        <Text style={styles.infoLinhaValor}>{tel ? tel : 'Não informado'}</Text>
                    </View>
                </View>
            </View>
            <View style={estilosGlobais.sessao}>
                <Rodape />
            </View>
        </SafeAreaView>
    )
}