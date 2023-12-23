// Info.js

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PlantNavBar from '../../navigation/PlantNavBar';

const Precaution = ({ route }) => {
    const { plantId } = route.params;

    return (
        <View>
            <PlantNavBar plantId={plantId} />
            <Text>Precaution</Text>
        </View>
    );
};

export default Precaution;
