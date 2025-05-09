import { SafeAreaView, Text, View, StyleSheet, FlatList } from 'react-native'
import { layouts } from '../../assets/styles/StylesGlobal'
import { layouts as layoutsPerfil } from '../../assets/styles/StylesPaginasPerfil'
import { paletaCores } from '../../assets/styles/StylesGlobal'
import { LinearGradient } from 'expo-linear-gradient'
import Rodape from '../../components/Rodape'
import Icon from 'react-native-vector-icons/Feather'
import BotaoVoltar from '../../components/BotaoVoltar'

export default function PerfilMinhaConta({navigation}) {
    const listaPlanoBeneficios = [
        { id: '1', descr: '1.000 tarefas simultâneas' },
        { id: '2', descr: 'Assistente personalizado' },
        { id: '3', descr: 'Alertas para tarefas inativas' },
        { id: '4', descr: 'Tags para identificação de tarefas' },
    ]

    const renderItem = ({ item }) => (
        <View style={styles.itemBeneficio}>
            <Icon name="check" size={20} color={paletaCores.primaria.medio} />
            <Text style={styles.itemBeneficioNome}>{item.descr}</Text>
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
                        <Text style={[layouts.textoTitulo03, styles.planoNome]}>Plano</Text>
                    </View>
                    <Text style={styles.planoValor}>Grátis</Text>
                </LinearGradient>
                <View style={[layoutsPerfil.sessao, styles.sessaoBeneficios]}>
                    <Text style={[layouts.textoTitulo02, {marginBottom: 12}]}>Benefícios</Text>
                    <FlatList
                        data={listaPlanoBeneficios} // Array de dados
                        renderItem={renderItem} // Função para renderizar cada item
                        keyExtractor={(item) => item.id} // Chave única para cada item
                    />
                </View>
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
        borderColor: paletaCores.cinza.claro,
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