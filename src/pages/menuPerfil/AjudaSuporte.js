import { SafeAreaView, View, Text, TouchableOpacity } from "react-native"
import { layouts, paletaCores } from '../../assets/styles/StylesGlobal'
import BotaoVoltar from "../../components/BotaoVoltar"
import Rodape from "../../components/Rodape"


export default function AjudaSuporte({ navigation }) {
    const perguntasFrequentes = [
        { pergunta: "Como redefinir minha senha?", resposta: "Você pode redefinir sua senha na página de configurações." },
        { pergunta: "Como entrar em contato com o suporte?", resposta: "Envie um e-mail para suporte@exemplo.com." },
        { pergunta: "Posso excluir minha conta?", resposta: "Sim, entre em contato com o suporte para solicitar a exclusão." },
    ]

    return (
        <SafeAreaView style={layouts.pagina}>
            <View style={layouts.sessao}>
                <BotaoVoltar navigation={navigation} texto="Ajuda e Suporte" />
                <Text style={[layouts.textoTitulo03, { color: paletaCores.preto, marginBottom: 20 }]}>
                    Perguntas Frequentes
                </Text>
                {perguntasFrequentes.map((item, index) => (
                    <View key={index} style={{ marginVertical: 15, marginLeft: 15 }}>
                        <Text style={[layouts.textoParagrafo, { fontWeight: "bold" }]}>{item.pergunta}</Text>
                        <Text style={{color: paletaCores.cinza.escuro}}>{item.resposta}</Text>
                    </View>
                ))}
                <TouchableOpacity
                    style={{
                        marginTop: 30,
                        padding: 15,
                        backgroundColor: paletaCores.primaria.medio,
                        borderRadius: 5,
                    }}
                    onPress={{}}
                >
                    <Text style={{ color: "#fff", textAlign: "center", fontWeight: "bold" }}>
                        Entrar em Contato
                    </Text>
                </TouchableOpacity>
            </View>
            <Rodape />
        </SafeAreaView>
    )
}
