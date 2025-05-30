import { StyleSheet, StatusBar, Alert, ActivityIndicator } from 'react-native'
import { use, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { paletaCores } from './src/assets/styles/StylesGlobal'
import AsyncStorage from '@react-native-async-storage/async-storage'
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

export default function App() {

    const [userLogado, setUserLogado] = useState(false)

    const checarUsuarioLogado = async () => {
        try {
            const dados = await AsyncStorage.getItem('@usuario')
            if(dados !== null) {
                const usuario = JSON.parse(dados)
                setUserLogado(usuario)
            }
        } catch (error) {
            console.error('Erro ao recuperar dados:', error)
        }
    }

    checarUsuarioLogado()

    return (
        <NavigationContainer>
            <StatusBar barStyle='light-content' backgroundColor={paletaCores.primaria.medio} />
            <Stack.Navigator screenOptions={{headerShown: false}} style={styles.appContainer}>

                <Stack.Screen name='AppMain' component={userLogado ? Tabs : LoginPage} options={{}} />

                <Stack.Screen name='Nova Tarefa' component={NovaTarefaPage} options={{}}/>
                <Stack.Screen name='DadosPessoais' component={DadosPessoais} options={{}}/>
                <Stack.Screen name='MinhaConta' component={MinhaConta} options={{}}/>
                <Stack.Screen name='Preferencias' component={Preferencias} options={{}}/>
                <Stack.Screen name='AjudaSuporte' component={AjudaSuporte} options={{}}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    appContainer: {
        
    }
})