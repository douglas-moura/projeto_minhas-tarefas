import { StyleSheet, StatusBar, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { paletaCores } from './src/assets/styles/StylesGlobal'
import Icon from 'react-native-vector-icons/Feather'
import HomePage from './src/pages/HomePage'
import PerfilPage from './src/pages/PerfilPage'

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

const user = {
    infosPessoais: {
        nome: 'Douglas',
        sobrenome: 'Moura',
    }
}

const Tabs = () => {
    return (
        <Tab.Navigator screenOptions={{headerShown: false}}>
            <Tab.Screen 
                name="Inicio"
                component={HomePage}
                options={{
                    tabBarIcon: ({ color }) => <Icon name="home" color={color} size={20} />
                }}
            />
            <Tab.Screen 
                name="Nova Tarefa"
                component={PerfilPage}
                options={{
                    tabBarIcon: ({ color }) => <Icon name="plus" color={color} size={20} />
                }}
            />
            <Tab.Screen 
                name="Perfil"
                component={PerfilPage}
                options={{
                    tabBarIcon: ({ color }) => <Icon name="user" color={color} size={20} />
                }}
            />
        </Tab.Navigator>
    )
}

export default function App() {
    return (
        <NavigationContainer>
            <StatusBar barStyle='light-content' backgroundColor={paletaCores.primaria.medio} />
            <Stack.Navigator screenOptions={{headerShown: false}} style={styles.appContainer}>
                <Stack.Screen name='AppMain' component={Tabs} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    appContainer: {
        
    }
})