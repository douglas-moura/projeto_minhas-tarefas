import { SafeAreaView, View, Text, TouchableOpacity, ScrollView } from "react-native"
import { layouts, paletaCores } from '../../assets/styles/StylesGlobal'
import BotaoVoltar from "../../components/BotaoVoltar"
import Rodape from "../../components/Rodape"


export default function AjudaSuporte({ navigation }) {
    const perguntasFrequentes = [
        { pergunta: "Como redefinir minha senha?", resposta: "Você pode redefinir sua senha na página de configurações. Acesse o menu de configurações, clique em 'Redefinir Senha' e siga as instruções enviadas para o seu e-mail cadastrado." },
        { pergunta: "Como entrar em contato com o suporte?", resposta: "Envie um e-mail para suporte@exemplo.com com uma descrição detalhada do seu problema. Inclua informações como seu nome, e-mail cadastrado e capturas de tela, se possível, para que possamos ajudá-lo mais rapidamente." },
        { pergunta: "Posso excluir minha conta?", resposta: "Sim, você pode solicitar a exclusão da sua conta entrando em contato com o suporte. Envie um e-mail para suporte@exemplo.com informando o motivo da exclusão e confirmando que deseja prosseguir com a solicitação." },
        { pergunta: "Como posso alterar meu endereço de e-mail cadastrado?", resposta: "Para alterar seu endereço de e-mail, vá até a página de configurações, clique em 'Alterar E-mail' e insira o novo endereço. Você receberá um e-mail de confirmação no novo endereço para validar a alteração." },
        { pergunta: "O que fazer se eu não receber e-mails do aplicativo?", resposta: "Se você não estiver recebendo e-mails, verifique sua pasta de spam ou lixo eletrônico. Certifique-se de que o endereço suporte@exemplo.com está na sua lista de remetentes confiáveis. Caso o problema persista, entre em contato com o suporte." },
        { pergunta: "Como posso recuperar dados perdidos?", resposta: "Se você perdeu dados, verifique se está conectado à conta correta. Caso tenha excluído informações acidentalmente, entre em contato com o suporte para verificar se é possível recuperar os dados. Lembre-se de que nem sempre é possível restaurar informações excluídas." },
        { pergunta: "O aplicativo é compatível com todos os dispositivos?", resposta: "Nosso aplicativo é compatível com a maioria dos dispositivos Android e iOS. Certifique-se de que seu dispositivo atende aos requisitos mínimos, como a versão do sistema operacional. Para mais informações, consulte a página de compatibilidade na loja de aplicativos." },
        { pergunta: "Como posso desativar notificações?", resposta: "Para desativar notificações, vá até as configurações do aplicativo e desmarque a opção 'Receber Notificações'. Você também pode gerenciar as permissões de notificações diretamente nas configurações do seu dispositivo." },
        { pergunta: "O que fazer se o aplicativo não estiver funcionando corretamente?", resposta: "Se o aplicativo não estiver funcionando como esperado, tente reiniciá-lo ou atualizar para a versão mais recente. Caso o problema persista, desinstale e reinstale o aplicativo. Se isso não resolver, entre em contato com o suporte com detalhes sobre o problema." },
        { pergunta: "Como posso sugerir melhorias para o aplicativo?", resposta: "Adoramos receber feedback dos nossos usuários! Envie suas sugestões para suporte@exemplo.com. Nossa equipe analisará suas ideias e, se possível, as incluirá em futuras atualizações do aplicativo." }
    ];

    return (
        <SafeAreaView style={layouts.pagina}>
            <ScrollView style={layouts.sessao}>
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
                        marginBottom: 40,
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
            </ScrollView>
            <Rodape />
        </SafeAreaView>
    )
}
