import { StyleSheet, StatusBar, Alert, ActivityIndicator } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { paletaCores } from './src/assets/styles/StylesGlobal'

import { AuthProvider, useAuth } from './src/contexts/AuthContext'

import Icon from 'react-native-vector-icons/Feather'

import LoginPage from './src/pages/LoginPage'
import HomePage from './src/pages/HomePage'

import PerfilPage from './src/pages/PerfilPage'
import NovaTarefaPage from './src/pages/NovaTarefaPage'
import DadosPessoais from './src/pages/menuPerfil/DadosPessoais'
import MinhaConta from './src/pages/menuPerfil/MinhaConta'
import Preferencias from './src/pages/menuPerfil/Preferencias'
import AjudaSuporte from './src/pages/menuPerfil/AjudaSuporte'

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

const Tabs = () => {
    return (
        <Tab.Navigator screenOptions={{headerShown: false}}>
            <Tab.Screen 
                name="Inicio"
                component={HomePage}
                options={{
                    tabBarIcon: ({ color }) => <Icon name="home" color={color} size={20} />,
                    //animation: 'fade',
                    //presentation: 'modal',
                }}
            />
            <Tab.Screen 
                name="Perfil"
                component={PerfilPage}
                options={{
                    tabBarIcon: ({ color }) => <Icon name="user" color={color} size={20} />,
                    //animation: 'fade',
                    //presentation: 'modal',
                }}
            />
        </Tab.Navigator>
    )
}

const AppRoutes = () => {
    const { estaLogado } = useAuth()

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            {estaLogado ? (
                <Stack.Screen name='AppMain' component={Tabs} />
            ) : (
                <Stack.Screen name='LoginPage' component={LoginPage} />
            )}
            <Stack.Screen name='Nova Tarefa' component={NovaTarefaPage} />
            <Stack.Screen name='DadosPessoais' component={DadosPessoais} />
            <Stack.Screen name='MinhaConta' component={MinhaConta} />
            <Stack.Screen name='Preferencias' component={Preferencias} />
            <Stack.Screen name='AjudaSuporte' component={AjudaSuporte} />
        </Stack.Navigator>
    )
}

export default function App() {
    return (
        <AuthProvider>
			<NavigationContainer>
                <StatusBar
                    //barStyle="light-content" // ou "dark-content"
                    backgroundColor={paletaCores.primaria.medio} // coloque a cor desejada
                />
				<AppRoutes />
			</NavigationContainer>
		</AuthProvider>
    )
}