import { useState, useEffect } from 'react'
import { SafeAreaView, Text, View, StyleSheet, FlatList } from 'react-native'
import { layouts } from '../../assets/styles/StylesGlobal'
import { layouts as layoutsPerfil } from '../../assets/styles/StylesPaginasPerfil'
import { paletaCores } from '../../assets/styles/StylesGlobal'
import { LinearGradient } from 'expo-linear-gradient'
import { buscarPlano } from '../../functions/buscarPlano'
import { localhost_ip } from '../../helpers/localhost'
import { useAuth } from '../../contexts/AuthContext'
import Icon from 'react-native-vector-icons/Feather'
import Botao from '../../components/Botao'
import BotaoVoltar from '../../components/BotaoVoltar'
import Rodape from '../../components/Rodape'

export default function MinhaConta({navigation}) {
    const [plano, setPlano] = useState(null)
    const { usuario } = useAuth()

    useEffect(() => {
        const fetchPlano = async () => {
            const planosDataBase = await buscarPlano(localhost_ip, usuario.plano_id)
            if (planosDataBase) setPlano(planosDataBase)
        }
        fetchPlano()
    }, [])

    const renderItem = ({ item }) => (
        <View style={styles.itemBeneficio}>
            <Icon name="check-square" size={20} style={styles.listaMarcador} color={paletaCores.primaria.medio} />
            <Text style={styles.itemBeneficioNome}>{item}</Text>
        </View>
    )

    return (
        <SafeAreaView style={layouts.pagina}>
            <View style={layouts.sessao}>
                <BotaoVoltar navigation={navigation} texto="Minha Conta" />
                <LinearGradient
                    colors={[paletaCores.primaria.medio, paletaCores.primaria.escuro]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }} 
                    style={styles.planoBloco}
                >
                    <View style={{flexDirection: 'row', alignItems: 'center'}}> 
                        <Icon name="award" size={20} color={paletaCores.branco} />
                        <Text style={[layouts.textoTitulo03, styles.planoNome]}>Plano Atual</Text>
                    </View>
                    <Text style={styles.planoValor}>{plano ? plano.titulo : 'Free'}</Text>
                </LinearGradient>
                <View style={[layoutsPerfil.sessao, styles.sessaoBeneficios]}>
                    <Text style={[layouts.textoTitulo02, { marginBottom: 12, color: paletaCores.preto }]}>Benefícios</Text>
                    <FlatList
                        data={plano && plano.beneficios ? plano.beneficios : []} // Array de dados
                        renderItem={renderItem} // Função para renderizar cada item
                        keyExtractor={(item) => item.id} // Chave única para cada item
                    />
                </View>
                {/*<Botao texto="Alterar Plano" onPress={() => {}} />*/}
                <Rodape />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    planoBloco: {
        padding: 28,
        borderRadius: 12,
        marginBottom: 16,
    },
    planoNome: {
        color: paletaCores.branco,
        marginLeft: 8,
    },
    planoValor: {
        color: paletaCores.branco,
        fontSize: 38,
        fontWeight: 'bold',
        marginTop: 18,
    },
    sessaoBeneficios: {
        marginTop: 16,
        padding: 28,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: paletaCores.cinza.medio,
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
        color: paletaCores.cinza.escuro,
    }
})