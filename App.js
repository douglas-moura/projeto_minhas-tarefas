import { StyleSheet, StatusBar, Alert, ActivityIndicator } from 'react-native'
import { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { paletaCores } from './src/assets/styles/StylesGlobal'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Icon from 'react-native-vector-icons/Feather'
import HomePage from './src/pages/HomePage'
import PerfilPage from './src/pages/PerfilPage'
import NovaTarefaPage from './src/pages/NovaTarefaPage'

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
                    animation: 'fade',
                    presentation: 'modal',
                }}
            />
            <Tab.Screen 
                name="Perfil"
                component={PerfilPage}
                options={{
                    tabBarIcon: ({ color }) => <Icon name="user" color={color} size={20} />,
                    animation: 'fade',
                    presentation: 'modal',
                }}
            />
        </Tab.Navigator>
    )
}

export default function App() {

    const [usuario, setUsuario] = useState(null)

    return (
        <NavigationContainer>
            <StatusBar barStyle='light-content' backgroundColor={paletaCores.primaria.medio} />
            <Stack.Navigator screenOptions={{headerShown: false}} style={styles.appContainer}>
                <Stack.Screen name='AppMain' component={Tabs} options={{}} />
                <Stack.Screen name='Nova Tarefa' component={NovaTarefaPage} options={{}}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    appContainer: {
        
    }
})