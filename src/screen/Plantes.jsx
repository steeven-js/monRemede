import { View, Text } from 'react-native'
import React from 'react'

const Plantes = ({navigation}) => {
    return (
        <View>
            <Text onPress={() => {navigation.navigate('PlantScreen')} }>Plantes</Text>
        </View>
    )
}

export default Plantes