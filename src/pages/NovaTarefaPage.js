import { useState, useEffect } from "react"
import { SafeAreaView, ScrollView, StyleSheet, View, Text, Pressable, TextInput } from "react-native"
import { createEstilosGlobais, createPaletaCores } from "../assets/styles"
import { adicionarTarefa } from "../functions/adicionarTarefa"
import { buscarTarefas } from "../functions/buscarTarefas"
import { localhost_ip } from "../helpers/localhost"
import { usePrefs } from "../contexts/PrefsContext"


export default function NovaTarefaPage({ navigation }) {
    const [novaTarefaTitulo, setNovaTarefaTitulo] = useState(null)
    const [novaTarefaDescr, setNovaTarefaDescr] = useState(null)
    const [tarefas, setTarefas] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            const tarefasLista = await buscarTarefas(localhost_ip)
            setTarefas(tarefasLista)
        }
        fetchData()
    }, [])

    const { estadoTemaEscuro } = usePrefs()
    const estilosGlobais = createEstilosGlobais(estadoTemaEscuro)
    const coresGlobais = createPaletaCores(estadoTemaEscuro)

    const styles = StyleSheet.create({
        campoInput: {
            flexDirection: 'column',
            marginBottom: 12,
        },
        labelInput: {
            color: coresGlobais.primaria.medio,
            fontWeight: 'bold',
            fontSize: 16,
            marginVertical: 6,
        },
        btnsAddTarefas: {
            width: '49%',
        }
    })

    return (
        <SafeAreaView style={estilosGlobais.pagina}>
            <ScrollView>
                <View style={estilosGlobais.sessao}>
                    <Text style={[
                        estilosGlobais.textoTitulo01,
                        { marginVertical: 22, textAlign: 'center', color: coresGlobais.cores.textoDefault, fontWeight: 'bold'}
                    ]}>Insira nova tarefa</Text>
                    <View style={styles.campoInput}>
                        <Text style={styles.labelInput}>Título:</Text>
                        <TextInput
                            style={estilosGlobais.inputDefault}
                            placeholder="Ex.: Fazer compras"
                            keyboardType="alphaNumeric"
                            value={novaTarefaTitulo}
                            onChangeText={setNovaTarefaTitulo}
                        />
                    </View>
                    <View style={styles.campoInput}>
                        <Text style={styles.labelInput}>Descrição:</Text>
                        <TextInput
                            style={estilosGlobais.inputDefault}
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
                            style={[
                                estilosGlobais.btn,
                                estilosGlobais.btnPrimario,
                                styles.btnsAddTarefas
                            ]}
                            onPress={() => {
                                adicionarTarefa(
                                    "0",
                                    localhost,
                                    {
                                        tarefa_id: tarefas.length,
                                        titulo: novaTarefaTitulo,
                                        data: new Date(),
                                        descr: novaTarefaDescr,
                                        status: false
                                    }
                                )
                                setTimeout(() => {
                                    navigation.navigate('AppMain')
                                }, 1000)
                            }}
                        >
                            <Text style={estilosGlobais.btnTextoPrimario}>Salvar</Text>
                        </Pressable>
                        <Pressable
                            style={[
                                estilosGlobais.btn,
                                estilosGlobais.btnTextoSecundario,
                                estilosGlobais.btnAlerta,
                                styles.btnsAddTarefas
                            ]}
                            onPress={() => navigation.goBack()}
                        >
                            <Text style={estilosGlobais.btnTextoSecundario}>Cancelar</Text>
                        </Pressable>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}