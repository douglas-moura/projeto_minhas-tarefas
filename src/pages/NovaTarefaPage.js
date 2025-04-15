import { SafeAreaView, ScrollView, StyleSheet, View, Text, Pressable, TextInput } from "react-native"
import { layouts, paletaCores } from "../assets/styles/StylesGlobal"
import { useState } from "react"
import { adicionarTarefa } from "../functions/adicionarTarefa"

export default function NovaTarefaPage({ navigation }) {
    const [novaTarefaTitulo, setNovaTarefaTitulo] = useState(null)
    const [novaTarefaDescr, setNovaTarefaDescr] = useState(null)

    return (
        <SafeAreaView style={layouts.pagina}>
            <ScrollView>
                <View style={layouts.sessao}>
                    <Text style={[
                        layouts.textoTitulo01,
                        { marginVertical: 22, textAlign: 'center', color: paletaCores.cinza.escuro }
                    ]}>Insira nova tarefa</Text>
                    <View style={styles.campoInput}>
                        <Text style={styles.labelInput}>Título:</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Ex.: Fazer compras"
                            keyboardType="alphaNumeric"
                            value={novaTarefaTitulo}
                            onChangeText={setNovaTarefaTitulo}
                        />
                    </View>
                    <View style={styles.campoInput}>
                        <Text style={styles.labelInput}>Descrição:</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Ex.: Ir ao mercado para comprar frutas e verduras"
                            keyboardType="alphaNumeric"
                            value={novaTarefaDescr}
                            onChangeText={setNovaTarefaDescr}
                        />
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginTop: 20,
                        width: '100%',
                    }}>
                        <Pressable
                            style={[layouts.btn, layouts.btnPrimario, styles.btnsAddTarefas]}
                            onPress={() => {
                                adicionarTarefa("0", {titulo: novaTarefaTitulo, data: novaTarefaDescr, status: false})
                            }}
                        >
                            <Text style={layouts.btnTextoPrimario}>Salvar</Text>
                        </Pressable>
                        <Pressable
                            style={[layouts.btn, layouts.btnSecundario, styles.btnsAddTarefas]}
                            onPress={() => navigation.navigate("AppMain")}
                        >
                            <Text style={layouts.btnTextoSecundario}>Cancelar</Text>
                        </Pressable>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    campoInput: {
        flexDirection: 'column',
        marginBottom: 12,
    },
    labelInput: {
        color: paletaCores.primaria.medio,
        fontWeight: 'bold',
        fontSize: 16,
        marginVertical: 6,
    },
    input: {
        borderWidth: 0,
        borderColor: paletaCores.cinza.claro,
        backgroundColor: paletaCores.cinza.claro,
        borderRadius: 6,
        height: 56,
        paddingHorizontal: 20,
    },
    btnsAddTarefas: {
        width: '49%',
    }
})