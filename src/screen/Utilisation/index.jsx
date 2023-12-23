// Info.js

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PlantNavBar from '../../navigation/PlantNavBar';

const Utilisation = ({ route }) => {
    const { plantId } = route.params;

    return (
        <View>
            <PlantNavBar plantId={plantId} />
            <Text>Utilisation</Text>
        </View>
    );
};

export default Utilisation;
