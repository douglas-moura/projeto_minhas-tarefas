import { SafeAreaView, View, Text, StyleSheet } from 'react-native'
import { layouts } from '../../assets/styles/StylesGlobal'
import BotaoVoltar from '../../components/BotaoVoltar'

export default function PerfilDadosPessoais({navigation}) {
    return (
        <SafeAreaView style={layouts.pagina}>
            <View style={layouts.sessao}>
                <BotaoVoltar navigation={navigation} />
                <Text>Perfil Dados Pessoais</Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    
})
