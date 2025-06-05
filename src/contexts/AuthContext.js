import { createContext, useState, useContext } from "react"
import { infosUsuarioLogado } from "../functions/infosUsuarioLogado"

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [estaLogado, setEstaLogado] = useState(false)
    const [usuario, setUsuario] = useState(null)

    const fetchData = async () => {
        const user = await infosUsuarioLogado()
        setUsuario(user)
    }

    const login = () => {
        setEstaLogado(true)
        fetchData()
    }

    const logout = () => {
        setEstaLogado(false)
        setUsuario(null)
    }

    return (
        <AuthContext.Provider value={{ estaLogado, login, logout, usuario }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext)
}