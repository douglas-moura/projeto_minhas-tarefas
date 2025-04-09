import { StyleSheet } from 'react-native'

export const paletaCores = StyleSheet.create({
    primaria: {
        medio: '#1A8EF4',
    },
    cinza: {
        claro: '#ededed',
        medio: '#c2c2c2',
        escuro: '#555',
    },
    branco: '#fff',
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
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 12,
    },
    textoTitulo02: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    textoParagrafo: {
        fontSize: 16,
    }
})