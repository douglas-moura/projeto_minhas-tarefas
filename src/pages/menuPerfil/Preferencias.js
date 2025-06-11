import { useState, useEffect } from 'react'
import { SafeAreaView, View, Text, FlatList, StyleSheet, Switch, TouchableOpacity } from 'react-native'
import { layouts, paletaCores } from '../../assets/styles/stylesGlobal'
import { useAuth } from '../../contexts/AuthContext'
import { usePrefs } from '../../contexts/PrefsContext'
import Icon from 'react-native-vector-icons/Feather'
import BotaoVoltar from '../../components/BotaoVoltar'
import Rodape from '../../components/Rodape'
import BotaoToggle from '../../components/BotaoToggle'
import { estilosGlobais } from '../../assets/styles'

export default function Preferencias({ navigation }) {
    const { usuario } = useAuth()
    const { estadoTemaEscuro, alternarTema } = usePrefs()

    const [prefs, setPrefs] = useState(null)
    const estilos = estilosGlobais()

    const acoes = {
        alternarTema: alternarTema,
        desativarNotificacoes: () => console.log('Desativar notificações') // ou uma função real
    }

    useEffect(() => {
        if (usuario && usuario.preferencias) setPrefs(usuario.preferencias)
    }, [usuario])

    const renderItem = ({ item }) => (
        <View style={styles.preferenciaContent}>
            {console.log(item)}
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Icon name={item.icon} size={24} style={styles.preferenciaIcon} />
                <Text style={styles.preferenciaTitulo}>{item.titulo}</Text>
            </View>
            <TouchableOpacity
                activeOpacity={1}
                onPress={() => acoes[item.acao]?.()}
                style={[
                    styles.toggleContainer,
                    estadoTemaEscuro && item.acao === 'alternarTema' ? { justifyContent: 'flex-start' } : { justifyContent: 'flex-end' }
                ]}
            >
                <View style={styles.toggleBotao}></View>
            </TouchableOpacity>
        </View>
    )

    return (
        <SafeAreaView style={layouts.pagina}>
            <View style={layouts.sessao}>
                <BotaoVoltar navigation={navigation} texto="Preferências" />
            </View>
            <View style={layouts.sessao}>
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
    preferenciaContent: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderWidth: 0,
        borderColor: paletaCores.cinza.claro,
        padding: 16,
        borderRadius: 8,
        marginBottom: 8,
    },
    preferenciaIcon: {
        marginRight: 16,
        //color: paletaCores.primaria.medio,
    },
    preferenciaTitulo: {
        fontSize: 18,
        color: paletaCores.preto,
        fontWeight: 'bold',
    },
    toggleContainer: {
        backgroundColor: paletaCores.branco,
        borderWidth: 1,
        borderColor: paletaCores.cinza.medio,
        borderRadius: 16,
        width: 50,
        padding: 4,
        flexDirection: 'row',
        alignItems: 'center',
    },
    toggleBotao: {
        width: 20,
        height: 20,
        borderRadius: 20,
        backgroundColor: paletaCores.primaria.medio,
    }
})