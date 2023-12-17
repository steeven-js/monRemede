import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Info from '../screen/plant/Info';
import Propriete from '../screen/plant/Propriete';
import Utilisation from '../screen/plant/Utilisation';
import Precaution from '../screen/plant/Precaution';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Tab = createBottomTabNavigator();

const PlantNavBar = ({ navigation, route }) => {
    const navigateToScreen = (screenName) => {
        navigation.navigate(screenName);
    };
    return (
        <View style={styles.header}>
            <View style={styles.divAboveTabs}>
                <Text onPress={() => navigation.goBack()}>Back</Text>
                <Text>Favoris</Text>
            </View>
            <View style={styles.container}>
                <TouchableOpacity onPress={() => navigateToScreen('Info')} >
                    <Text>Info</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigateToScreen('Propriete')} >
                    <Text>Propriete</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigateToScreen('Utilisation')} >
                    <Text>Utilisation</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigateToScreen('Precaution')} >
                    <Text>Precaution</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: 'lightgreen',
    },
    divAboveTabs: {
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
});

export default PlantNavBar;
