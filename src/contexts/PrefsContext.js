import { createContext, useContext, useState, useEffect } from "react"
import { useAuth } from "./AuthContext"

const PrefsContext = createContext()

export const PrefsProvider = ({ children }) => {
    const { usuario } = useAuth()
    const [notificacoes, setNotificacoes] = useState(true)
    const [estadoTemaEscuro, setEstadoTemaEscuro] = useState(false)

    useEffect(() => {
        if (usuario && usuario.preferencias) {
            setNotificacoes(usuario.preferencias[0]?.status ?? true)
            setEstadoTemaEscuro(usuario.preferencias[1]?.status ?? false)
        }
    }, [usuario])

    const alternarTema = () => {
        setEstadoTemaEscuro(prev => !prev)
    }

    const desativarNotificacoes = () => {
        setNotificacoes(false)
    }

    return (
        <PrefsContext.Provider value={{ estadoTemaEscuro, alternarTema, notificacoes, desativarNotificacoes }}>
            {children}
        </PrefsContext.Provider>
    )
}

export const usePrefs = () => {
    return useContext(PrefsContext)
}