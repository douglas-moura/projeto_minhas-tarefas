import { StyleSheet } from 'react-native'

export const paletaCores = StyleSheet.create({
    primaria: {
        claro: '#D0F2FE',
        medio: '#1A8EF4',
    },
    cinza: {
        pelicula: '#f9f9f9',
        claro: '#f3f3f3',
        medio: '#d7d7d7',
        escuro: '#888888',
    },
    branco: '#ffffff',
    preto: '#252525',
})

export const layouts = StyleSheet.create({
    pagina: {
        flex: 1,
        backgroundColor: paletaCores.branco,
    },
    sessao: {
        padding: 20,
    },
    container: {
        marginBottom: 16,
    },
    textoTitulo01: {
        fontSize: 28,
        fontWeight: 'bold',
        color: paletaCores.cinza.escuro,
        //marginBottom: 12,
    },
    textoTitulo02: {
        fontSize: 24,
        fontWeight: 'bold',
        color: paletaCores.cinza.escuro,
    },
    textoTitulo03: {
        fontSize: 20,
        fontWeight: 'bold',
        color: paletaCores.cinza.escuro,
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
        backgroundColor: paletaCores.primaria.medio,
    },
    btnTextoPrimario: {
        color: paletaCores.branco,
        fontSize: 16,
    },
    btnSecundario: {
        borderWidth: 1,
        borderColor: paletaCores.primaria.medio,
    },
    btnTextoSecundario: {
        color: paletaCores.primaria.medio,
        fontSize: 16,
    }
})