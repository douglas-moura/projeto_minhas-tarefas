import { useState, useEffect } from 'react'
import { SafeAreaView, View, Text, FlatList, StyleSheet } from 'react-native'
import { layouts, paletaCores } from '../../assets/styles/StylesGlobal'
import { useAuth } from '../../contexts/AuthContext'
import Icon from 'react-native-vector-icons/Feather'
import BotaoVoltar from '../../components/BotaoVoltar'
import Rodape from '../../components/Rodape'
import BotaoToggle from '../../components/BotaoToggle'

export default function Preferencias({ navigation }) {
    const [prefs, setPrefs] = useState(null)
    const { usuario } = useAuth()

    useEffect(() => {
        if (usuario && usuario.preferencias) setPrefs(usuario.preferencias)
    }, [usuario])

    const renderItem = ({ item }) => (
        <View style={styles.preferenciaContent}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Icon name={item.icon} size={24} style={styles.preferenciaIcon} />
                <Text style={styles.preferenciaTitulo}>{item.titulo}</Text>
            </View>
            <BotaoToggle />
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
        borderWidth: 1,
        borderColor: paletaCores.cinza.claro,
        paddingVertical: 16,
        borderRadius: 8,
        marginBottom: 8,
    },
    preferenciaIcon: {
        marginRight: 16,
    },
    preferenciaTitulo: {
        fontSize: 18,
        color: paletaCores.preto,
        fontWeight: 'bold',
    },
})