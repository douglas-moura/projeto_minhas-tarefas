import { useState, useEffect } from 'react'
import { SafeAreaView, Text, View, StyleSheet, FlatList } from 'react-native'
import { createEstilosGlobais, createPaletaCores } from '../../assets/styles'
import { LinearGradient } from 'expo-linear-gradient'
import { buscarPlano } from '../../functions/buscarPlano'
import { localhost_ip } from '../../helpers/localhost'
import { useAuth } from '../../contexts/AuthContext'
import { usePrefs } from '../../contexts/PrefsContext'
import Icon from 'react-native-vector-icons/Feather'
import BotaoVoltar from '../../components/BotaoVoltar'
import Rodape from '../../components/Rodape'


export default function MinhaConta({ navigation }) {
    const [plano, setPlano] = useState(null)
    const { usuario } = useAuth()
    const { estadoTemaEscuro } = usePrefs()
    const estilosGlobais = createEstilosGlobais(estadoTemaEscuro)
    const coresGlobais = createPaletaCores(estadoTemaEscuro)

    useEffect(() => {
        const fetchPlano = async () => {
            const planosDataBase = await buscarPlano(localhost_ip, usuario.plano_id)
            if (planosDataBase) setPlano(planosDataBase)
        }
        fetchPlano()
    }, [])

    const styles = StyleSheet.create({
        planoBloco: {
            padding: 28,
            borderRadius: 12,
            marginBottom: 16,
        },
        planoNome: {
            color: coresGlobais.branco,
            marginLeft: 8,
        },
        planoValor: {
            color: coresGlobais.branco,
            fontSize: 38,
            fontWeight: 'bold',
            marginTop: 18,
        },
        sessaoBeneficios: {
            marginTop: 16,
            padding: 28,
            borderRadius: 12,
            borderWidth: 1,
            borderColor: coresGlobais.cinza.medio,
        },
        listaMarcador: {
            fontSize: 24,
        },
        itemBeneficio: {
            flexDirection: 'row',
            alignItems: 'center',
            marginVertical: 8,
        },
        itemBeneficioNome: {
            marginLeft: 12,
            fontSize: 16,
            color: coresGlobais.cores.textoAlt,
        }
    })

    const renderItem = ({ item }) => (
        <View style={styles.itemBeneficio}>
            <Icon name="check-square" size={20} style={styles.listaMarcador} color={coresGlobais.primaria.medio} />
            <Text style={styles.itemBeneficioNome}>{item}</Text>
        </View>
    )

    return (
        <SafeAreaView style={estilosGlobais.pagina}>
            <View style={estilosGlobais.sessao}>
                <BotaoVoltar navigation={navigation} texto="Minha Conta" />
                <LinearGradient
                    colors={[coresGlobais.primaria.medio, coresGlobais.primaria.escuro]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    style={styles.planoBloco}
                >
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Icon name="award" size={20} color={coresGlobais.branco} />
                        <Text style={[estilosGlobais.textoTitulo03, styles.planoNome]}>Plano Atual</Text>
                    </View>
                    <Text style={styles.planoValor}>{plano ? plano.titulo : 'Free'}</Text>
                </LinearGradient>
                <View style={[estilosGlobais.sessao, styles.sessaoBeneficios]}>
                    <Text style={[estilosGlobais.textoTitulo02, { marginBottom: 12, color: coresGlobais.cores.textoDefault }]}>Benefícios</Text>
                    <FlatList
                        data={plano && plano.beneficios ? plano.beneficios : []} // Array de dados
                        renderItem={renderItem} // Função para renderizar cada item
                        keyExtractor={(_, index) => index.toString()} // Corrigido aqui!
                    />
                </View>
                {/*<Botao texto="Alterar Plano" onPress={() => {}} />*/}
                <Rodape />
            </View>
        </SafeAreaView>
    )
}