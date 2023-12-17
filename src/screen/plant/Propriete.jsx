import { View, Text } from 'react-native'
import React from 'react'

const Propriete = ({ route }) => {
    // Récupérer l'ID de la plante à partir des paramètres de navigation
    const { plantId } = route.params;
    
    return (
        <View>
            <Text>Propriete - Plant ID: {plantId}</Text>
        </View>
    )
}

export default Propriete