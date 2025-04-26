import { StyleSheet } from 'react-native'
import { paletaCores } from './StylesGlobal'

export const layouts = StyleSheet.create({
    tituloPaginaContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 40,
    },
    tituloIcone: {
        marginRight: 10,
        fontSize: 32,
        color: paletaCores.primaria.medio,
    },
    infoLinha: {
        padding: 18,
        marginBottom: 14,
        borderWidth: 1,
        borderColor: paletaCores.cinza.claro,
        borderRadius: 10,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    infoLinhaDescr: {
        fontSize: 12,
        color: paletaCores.cinza.escuro,
    },
    infoLinhaValor: {
        fontSize: 18,
        //fontWeight: 'bold',
        color: paletaCores.preto,
    }
})