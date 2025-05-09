import { useState } from 'react'
import { SafeAreaView, View, Text, FlatList, StyleSheet } from 'react-native'
import { layouts, paletaCores } from '../../assets/styles/StylesGlobal'
import { layouts as layoutsPerfil } from '../../assets/styles/StylesPaginasPerfil'
import { localhost } from '../../../infos_local'
import { getUsuario } from '../../functions/getUsuario'
import BotaoVoltar from '../../components/BotaoVoltar'
import Rodape from '../../components/Rodape'
import BotaoToggle from '../../components/BotaoToggle'

export default function PerfilDadosPessoais({ navigation }) {
    const [prefs, setPrefs] = useState(null)

    const buscarUsuario = async () => {
        const usuario = await getUsuario(localhost)
        if (usuario) {
            setPrefs(usuario.preferencias)
        }
    }

    const renderItem = ({ item }) => (
        <View style={styles.preferenciaContent}>
            <Text style={styles.preferenciaNome}>{item.titulo}</Text>
            <BotaoToggle />
        </View>
    )

    buscarUsuario()

    return (
        <SafeAreaView style={layouts.pagina}>
            <View style={layouts.sessao}>
                <BotaoVoltar navigation={navigation} texto="Preferências" />
            </View>
            <View style={layoutsPerfil.sessao}>
                <FlatList
                    data={prefs} // Array de dados
                    renderItem={renderItem} // Função para renderizar cada item
                    keyExtractor={(item) => item.id} // Chave única para cada item
                />
            </View>
            <View style={layouts.sessao}>
                <Rodape />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    preferenciaContent:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 32,
        paddingVertical: 8,
    },
    preferenciaNome:{
        fontSize: 16,
        color: paletaCores.preto,
    },
})