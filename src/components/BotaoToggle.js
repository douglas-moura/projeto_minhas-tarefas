import { View, Switch } from "react-native"
import { useState } from 'react'
import { paletaCores } from "../assets/styles/StylesGlobal"

export default function BotaoToggle({ valor, setValor }) {
    // Estado inicial do switch
    const [val, setVal] = useState(valor)

    return (
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Switch
                value={val}
                onValueChange={() => setVal(!val)}
                trackColor={{ false: '#767577', true: paletaCores.primaria.medio }}
                thumbColor={valor ? '#f5dd4b' : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
            />
        </View>
    )
}