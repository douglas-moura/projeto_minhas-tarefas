import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomePage from './src/pages/HomePage'
import PerfilPage from './src/pages/PerfilPage'

const Stack = createNativeStackNavigator()

const user = {
    infosPessoais: {
        nome: 'Douglas',
        sobrenome: 'Moura',
    }
}

export default function App() {
    return (
        <NavigationContainer style={styles.container}>
            <Stack.Navigator>
                <Stack.Screen
                    name='Home'
                    component={HomePage}
                    options={{title: `Olá, ${user.infosPessoais.nome}`}}
                />
                <Stack.Screen
                    name='Perfil'
                    component={PerfilPage}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})