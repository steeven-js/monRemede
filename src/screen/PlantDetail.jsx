import { View, Text } from 'react-native'
import React from 'react'

const PlantDetail = ({navigation, route}) => {
    const { plantId, plantName } = route.params;

    // Vous pouvez utiliser plantId pour récupérer les détails de la plante depuis le store

    return (
        <View>
            <Text onPress={() => navigation.goBack()}>Back</Text>
            <Text>Plant Name: {plantName}</Text>
            {/* Affichez d'autres détails de la plante ici */}
        </View>
    )
}

export default PlantDetail