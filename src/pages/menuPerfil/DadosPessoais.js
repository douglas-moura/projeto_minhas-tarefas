import { useState } from 'react'
import { SafeAreaView, View, Text } from 'react-native'
import { layouts, paletaCores } from '../../assets/styles/StylesGlobal'
import { layouts as layoutsPerfil } from '../../assets/styles/StylesPaginasPerfil'
import { localhost } from '../../../infos_local'
import { buscarUsuariosario } from '../../functions/gbuscarUsuariosetUsuario'
import { definirGenero } from '../../functions/definirGenero'
import { formatarData } from '../../functions/formatarData'
import Icon from 'react-native-vector-icons/Feather'
import BotaoVoltar from '../../components/BotaoVoltar'
import Rodape from '../../components/Rodape'

export default function DadosPessoais({navigation}) {
    const [nome, setNome] = useState(null)
    const [sobrenome, setSobrenome] = useState(null)
    const [email, setEmail] = useState(null)
    const [nasc, setNasc] = useState(null)
    const [sexo, setSexo] = useState(null)
    const [tel, setTel] = useState(null)

    const buscarInfosUsuario = async () => {
        const usuario = await buscarUsuarios(localhost)
        if(usuario) {
            setNome(usuario.nome)
            setSobrenome(usuario.sobrenome)
            setEmail(usuario.email)
            setTel(usuario.tel)
            setNasc(formatarData(usuario.nasc))
            setSexo(definirGenero(usuario.genero))
        }
    }
    
    buscarInfosUsuario()

    return (
        <SafeAreaView style={layouts.pagina}>
            <View style={layouts.sessao}>
                <BotaoVoltar navigation={navigation} texto="Dados Pessoais" />
                {/*
                <View style={layoutsPerfil.tituloPaginaContainer}>
                    <Icon name="user" style={layoutsPerfil.tituloIcone} />
                    <Text style={[layouts.textoTitulo02, {color: paletaCores.primaria.medio}]}>Dados Pessoais</Text>
                </View>
                */}
                <View style={layoutsPerfil.infoLinha}>
                    <View>
                        <Text style={layoutsPerfil.infoLinhaDescr}>Nome Completo</Text>
                        <Text style={layoutsPerfil.infoLinhaValor}>{`${nome ? nome : ''} ${sobrenome ? sobrenome : ''}`}</Text>
                    </View>
                    <Icon name="edit-2" style={{fontSize: 18, color: paletaCores.primaria.medio}} />
                </View>
                <View style={layoutsPerfil.infoLinha}>
                    <View>
                        <Text style={layoutsPerfil.infoLinhaDescr}>Data de Nascimento</Text>
                        <Text style={layoutsPerfil.infoLinhaValor}>{nasc ? nasc : 'Não informado'}</Text>
                    </View>
                    <Icon name="edit-2" style={{fontSize: 18, color: paletaCores.primaria.medio}} />
                </View>
                <View style={layoutsPerfil.infoLinha}>
                    <View>
                        <Text style={layoutsPerfil.infoLinhaDescr}>Sexo</Text>
                        <Text style={layoutsPerfil.infoLinhaValor}>{sexo ? sexo : 'Não informado'}</Text>
                    </View>
                    <Icon name="edit-2" style={{fontSize: 18, color: paletaCores.primaria.medio}} />
                </View>
                <View style={layoutsPerfil.infoLinha}>
                    <View>
                        <Text style={layoutsPerfil.infoLinhaDescr}>E-mail</Text>
                        <Text style={layoutsPerfil.infoLinhaValor}>{email}</Text>
                    </View>
                    <Icon name="edit-2" style={{fontSize: 18, color: paletaCores.primaria.medio}} />
                </View>
                <View style={layoutsPerfil.infoLinha}>
                    <View>
                        <Text style={layoutsPerfil.infoLinhaDescr}>Telefone</Text>
                        <Text style={layoutsPerfil.infoLinhaValor}>{tel ? tel : 'Não informado'}</Text>
                    </View>
                    <Icon name="edit-2" style={{fontSize: 18, color: paletaCores.primaria.medio}} />
                </View>
            </View>
            <View style={layouts.sessao}>
                <Rodape />
            </View>
        </SafeAreaView>
    )
}
