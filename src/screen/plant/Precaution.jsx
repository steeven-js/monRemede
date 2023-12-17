import { View, Text } from 'react-native'
import React from 'react'

const Precaution = ({ route }) => {
    // Récupérer l'ID de la plante à partir des paramètres de navigation
    const { plantId } = route.params;
    
    return (
        <View>
            <Text>Precaution - Plant ID: {plantId}</Text>
        </View>
    )
}

export default Precaution