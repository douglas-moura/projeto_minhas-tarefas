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
            borderRadius: 50,
            borderWidth: 2,
            borderColor: coresGlobais.cores.textoInvert,
        }
    })

    return (
        <SafeAreaView style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
        }}>
            <Text style={[estilosGlobais.textoTitulo02, {color: coresGlobais.cores.textoInvert}]}>
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