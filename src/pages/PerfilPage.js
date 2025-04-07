import { SafeAreaView, ScrollView, StyleSheet, View, Text } from "react-native"
import { layouts } from '../assets/styles/StylesGlobal'
import TarefasListaItem from "../components/TarefasListaItem"

export default function PerfilPage() {
    return (
        <SafeAreaView>
            <ScrollView>
                <View>
                    <Text>Perfil</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}