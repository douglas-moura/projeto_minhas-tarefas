import { useState, useEffect } from 'react'
import { SafeAreaView, View, Text, FlatList, StyleSheet, Switch, TouchableOpacity } from 'react-native'
import { useAuth } from '../../contexts/AuthContext'
import { usePrefs } from '../../contexts/PrefsContext'
import { createEstilosGlobais, createPaletaCores } from '../../assets/styles'
import Icon from 'react-native-vector-icons/Feather'
import BotaoVoltar from '../../components/BotaoVoltar'
import Rodape from '../../components/Rodape'

export default function Preferencias({ navigation }) {
    const { usuario } = useAuth()
    const { estadoTemaEscuro, alternarTema } = usePrefs()
    const [prefs, setPrefs] = useState(null)
    const estilosGlobais = createEstilosGlobais(estadoTemaEscuro)
    const coresGlobais = createPaletaCores(estadoTemaEscuro)

    const acoes = {
        alternarTema: alternarTema,
        desativarNotificacoes: () => console.log('Desativar notificações') // ou uma função real
    }

    useEffect(() => {
        if (usuario && usuario.preferencias) setPrefs(usuario.preferencias)
    }, [usuario])

    const styles = StyleSheet.create({
        preferenciaContent: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderWidth: 1,
            borderColor: coresGlobais.cores.borda,
            padding: 16,
            borderRadius: 8,
            marginBottom: 8,
        },
        preferenciaIcon: {
            marginRight: 16,
            color: coresGlobais.cores.textoDestaque,
        },
        preferenciaTitulo: {
            fontSize: 18,
            color: coresGlobais.cores.textoDefault,
            fontWeight: 'bold',
        },
        toggleContainer: {
            backgroundColor: coresGlobais.cores.backgroundDefault,
            borderWidth: 1,
            borderColor: coresGlobais.cores.borda,
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
            backgroundColor: coresGlobais.cores.backgroundDestaque,
        }
    })

    const renderItem = ({ item }) => (
        <View style={styles.preferenciaContent}>
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
        <SafeAreaView style={estilosGlobais.pagina}>
            <View style={estilosGlobais.sessao}>
                <BotaoVoltar navigation={navigation} texto="Preferências" />
            </View>
            <View style={estilosGlobais.sessao}>
                <FlatList
                    data={prefs} // Array de dados
                    renderItem={renderItem} // Função para renderizar cada item
                    keyExtractor={(item) => item.id} // Chave única para cada item
                />
            </View>
            <View style={estilosGlobais.sessao}>
                <Rodape />
            </View>
        </SafeAreaView>
    )
}