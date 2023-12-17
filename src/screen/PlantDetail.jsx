import { View, Text } from 'react-native'
import React from 'react'

const PlantDetail = ({navigation}) => {
    return (
        <View>
            <Text onPress={() => navigation.goBack()}>Back</Text>
            <Text>PlantDetail</Text>
        </View>
    )
}

export default PlantDetail