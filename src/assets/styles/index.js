import { StyleSheet, StatusBar, Platform } from 'react-native'
import { cores, temaClaro, temaEscuro } from "./temas"

const statusBarHeight = Platform.OS === 'android' ? StatusBar.currentHeight : 0

export const createPaletaCores = (tema) => {
    const temaAtivo = tema ? temaEscuro : temaClaro

    return StyleSheet.create({
        cores: {
            textoDefault: temaAtivo.cores.textoDefault,
            textoInvert: temaAtivo.cores.textoInvert,
            textoAlt: temaAtivo.cores.textoAlt,
            backgroundDefault: temaAtivo.cores.backgroundDefault,               // Cor principal de fundo da página
            backgroundDestaque: temaAtivo.cores.backgroundDestaque,   // Fundo de cards, modais, etc.
            backgroundSecundario: temaAtivo.cores.backgroundSecundario,   // Fundo de cards, modais, etc.
            borda: temaAtivo.cores.borda,                // Cor padrão das bordas
            icone: temaAtivo.cores.icone,             // Cor padrão dos ícones
            aviso: '#FF503D',                       // Cor para avisos / alertas (ex: vermelho)
            sucesso: '#80BA16',                     // Cor para sucesso (ex: verde)
        },
        primaria: {
            pelicula: cores.primaria.medio,
            claro: '#D0F2FE',
            medio: '#1A8EF4',
            escuro: '#0D52AF',
        },
        cinza: {
            pelicula: '#f9f9f9',
            claro: '#f3f3f3',
            medio: '#d7d7d7',
            escuro: '#888888',
        },
        branco: '#ffffff',
        preto: '#252525',
        texto: '#252525',
    })
}

export const createEstilosGlobais = (tema) => {
    const temaAtivo = tema ? temaEscuro : temaClaro

    return StyleSheet.create({
        pagina: {
            flex: 1,
            backgroundColor: temaAtivo.cores.backgroundDefault,
            paddingTop: statusBarHeight,
            borderWidth: 0,
        },
        sessao: {
            padding: temaAtivo.espacamento.gigante,
        },
        sessaoDestaque: {
            padding: temaAtivo.espacamento.gigante,
            backgroundColor: temaAtivo.cores.backgroundDestaque,
        },
        container: {
            marginBottom: temaAtivo.espacamento.grande,
        },
        textoTitulo01: {
            fontSize: temaAtivo.fonte.tamanhoExtraGrande,
            fontWeight: 'bold',
            marginBottom: temaAtivo.espacamento.gigante,
        },
        textoTitulo02: {
            fontSize: temaAtivo.fonte.tamanhoGrande,
            fontWeight: 'bold',
        },
        textoTitulo03: {
            fontSize: temaAtivo.fonte.tamanhoMedio,
            fontWeight: 'bold',
        },
        textoParagrafo: {
            fontSize: temaAtivo.fonte.tamanhoMedio,
        },
        btn: {
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            padding: temaAtivo.espacamento.grande,
            borderRadius: temaAtivo.borda.raio,
            alignItems: 'center',
        },
        btnPrimario: {
            backgroundColor: temaAtivo.cores.backgroundDestaque,
        },
        btnTextoPrimario: {
            color: temaAtivo.cores.textoInvert,
            fontSize: temaAtivo.fonte.tamanhoGrande,
            fontWeight: 'bold',
        },
        btnSecundario: {
            borderWidth: 1,
            borderColor: temaAtivo.cores.backgroundSecundario,
        },
        btnTextoSecundario: {
            color: temaAtivo.cores.textoInvert,
            fontSize: temaAtivo.fonte.tamanhoMedio,
        },
        btnAlerta: {
            backgroundColor: temaAtivo.cores.aviso,
        },
        iconeDefault: {
            color: temaAtivo.cores.icone,
        },
        iconeAlt: {
            color: temaAtivo.cores.textoInvert,
        },
        iconeContainer: {
            margin: temaAtivo.espacamento.medio,
            borderRadius: temaAtivo.borda.raio,
        },
        inputDefault: {
            borderWidth: 1,
            borderColor: temaAtivo.cores.borda,
            borderRadius: temaAtivo.borda.raio,
            padding: temaAtivo.espacamento.grande,
            backgroundColor: cores.branco,
            color: cores.preto,
        },
    })
}