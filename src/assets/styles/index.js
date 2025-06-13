import { StyleSheet, StatusBar, Platform } from 'react-native'
import { temaClaro, temaEscuro } from "./temas"

const statusBarHeight = Platform.OS === 'android' ? StatusBar.currentHeight : 0

export const createPaletaCores = (tema) => {
    const temaAtivo = tema ? temaEscuro : temaClaro

    return StyleSheet.create({  
        primaria: {
            pelicula: temaAtivo.primaria.pelicula,
            claro: temaAtivo.primaria.claro,
            medio: temaAtivo.primaria.medio,
            escuro: temaAtivo.primaria.escuro,
        },
        cinza: {
            pelicula: temaAtivo.cinza.pelicula,
            claro: temaAtivo.cinza.claro,
            medio: temaAtivo.cinza.medio,
            escuro: temaAtivo.cinza.escuro,
        },
        branco: temaAtivo.branco,
        preto: temaAtivo.preto,
    })
}

export const createEstilosGlobais = (tema) => {
    const temaAtivo = tema ? temaEscuro : temaClaro

    return StyleSheet.create({
        pagina: {
            flex: 1,
            backgroundColor: temaAtivo.branco,
            paddingTop: statusBarHeight,
            borderWidth: 0,
        },
        sessao: {
            padding: 24,
        },
        container: {
            marginBottom: 16,
        },
        textoTitulo01: {
            fontSize: 28,
            fontWeight: 'bold',
            color: temaAtivo.preto,
            //marginBottom: 12,
        },
        textoTitulo02: {
            fontSize: 24,
            fontWeight: 'bold',
            color: temaAtivo.preto,
        },
        textoTitulo03: {
            fontSize: 20,
            fontWeight: 'bold',
            color: temaAtivo.preto,
        },
        textoParagrafo: {
            fontSize: 16,
        },
        btn: {  
            padding: 14,
            borderRadius: 6,
            alignItems: 'center',
        },
        btnPrimario: {
            backgroundColor: temaAtivo.primaria.medio,
        },
        btnTextoPrimario: {
            color: temaAtivo.branco,
            fontSize: 16,
        },
        btnSecundario: {
            borderWidth: 1,
            borderColor: temaAtivo.primaria.medio,
        },
        btnTextoSecundario: {
            color: temaAtivo.primaria.medio,
            fontSize: 16,
        }
    })
}