import { SafeAreaView, StyleSheet, Pressable, Text, Image } from "react-native"
import { layouts, paletaCores } from "../assets/styles/StylesGlobal"
import { imagensPerfil } from "../helpers/imagensPerfil"

export default function TopBar({navigation, usuario}) {
    return (
        <SafeAreaView style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
        }}>
            <Text style={[layouts.textoTitulo03, {color: paletaCores.branco}]}>
                Olá, {usuario ? usuario.nome : 'Usuário'}
            </Text>
            <Pressable onPress={() => navigation.navigate("Perfil")}>
                <Image
                    style={styles.fotoPerfil}
                    source={
                        usuario?.id && imagensPerfil[usuario?.id]
                            ? imagensPerfil[usuario?.id]
                            : require('../assets/img/users-perfil/default.jpg')
                    }
                />
            </Pressable>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    fotoPerfil: {
        height: 40,
        width: 40,
        backgroundColor: paletaCores.branco,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: paletaCores.branco,
    }
})