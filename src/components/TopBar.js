import { SafeAreaView, StyleSheet, Pressable, Text, Image } from "react-native"
import { createEstilosGlobais, createPaletaCores } from "../assets/styles"
import { imagensPerfil } from "../helpers/imagensPerfil"
import { usePrefs } from "../contexts/PrefsContext"

export default function TopBar({ navigation, usuario }) {
    const { estadoTemaEscuro } = usePrefs()
    const estilosGlobais = createEstilosGlobais(estadoTemaEscuro)
    const coresGlobais = createPaletaCores(estadoTemaEscuro)

    const styles = StyleSheet.create({
        fotoPerfil: {
            height: 40,
            width: 40,
            backgroundColor: coresGlobais.branco,
            borderRadius: 50,
            borderWidth: 1,
            borderColor: coresGlobais.branco,
        }
    })

    return (
        <SafeAreaView style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
        }}>
            <Text style={[estilosGlobais.textoTitulo03, { color: coresGlobais.branco }]}>
                Olá, {usuario ? usuario.nome : 'Usuário'}
            </Text>
            <Pressable onPress={() => navigation.navigate("Perfil")}>
                <Image
                    style={styles.fotoPerfil}
                    source={
                        usuario?.id && imagensPerfil[usuario?.id]
                            ? imagensPerfil[usuario?.id]
                            : imagensPerfil.default
                    }
                />
            </Pressable>
        </SafeAreaView>
    )
}