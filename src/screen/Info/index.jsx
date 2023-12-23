// Info.js

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PlantNavBar from '../../navigation/PlantNavBar';

const Info = ({ route }) => {
    const { plantId } = route.params;

    return (
        <View>
            <PlantNavBar plantId={plantId} />
            <Text>Info</Text>
        </View>
    );
};

export default Info;
