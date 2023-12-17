import { View, Text } from 'react-native';
import React from 'react';

const Info = ({ route }) => {
    // Récupérer l'ID de la plante à partir des paramètres de navigation
    const { plantId } = route.params;
    const { plantName } = route.params;

    return (
        <View>
            <Text>Info - Plant ID: {plantId}</Text>
            <Text>Info - Plant Name: {plantName}</Text>
            {/* Autres contenus du composant Info */}
        </View>
    );
}

export default Info;
