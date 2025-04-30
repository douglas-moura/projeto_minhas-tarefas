import { SafeAreaView, Text, View, StyleSheet } from "react-native"
import { layouts } from "../../assets/styles/StylesGlobal"
import { layouts as layoutsPerfil } from "../../assets/styles/StylesPaginasPerfil"
import { paletaCores } from "../../assets/styles/StylesGlobal"
import { localhost } from "../../../infos_local"
import Icon from 'react-native-vector-icons/Feather'
import BotaoVoltar from "../../components/BotaoVoltar"
import { LinearGradient } from 'expo-linear-gradient';

export default function PerfilMinhaConta({navigation}) {
    return (
        <SafeAreaView style={layouts.pagina}>
            <View style={layouts.sessao}>
                <BotaoVoltar navigation={navigation} />
                <View style={layoutsPerfil.tituloPaginaContainer}>
                    <Icon name="bar-chart-2" style={layoutsPerfil.tituloIcone} />
                    <Text style={[layouts.textoTitulo02, {color: paletaCores.primaria.medio}]}>Minha Conta</Text>
                </View>
                <LinearGradient
                    colors={[paletaCores.primaria.medio, paletaCores.primaria.escuro]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }} 
                    style={styles.planoBloco}
                >
                    <Text style={[layouts.textoTitulo03, styles.planoNome]}>Plano</Text>
                    <Text style={styles.planoValor}>Grátis</Text>
                </LinearGradient>
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
    },
    planoValor: {
        color: paletaCores.branco,
        fontSize: 38,
        fontWeight: 'bold',
        marginTop: 16,
    }
})