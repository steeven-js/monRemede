// Propriete.js

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PlantNavBar from '../../navigation/PlantNavBar';

const Propriete = ({ route }) => {
    const { plantId } = route.params;

    return (
        <View>
            <PlantNavBar plantId={plantId} />
            <Text>Propriete</Text>
        </View>
    );
};

export default Propriete;
