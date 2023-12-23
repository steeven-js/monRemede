import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

const PlantNavBar = ({ plantId }) => {
    const navigation = useNavigation();
    const route = useRoute();

    const navigateToScreen = (screenName) => {
        navigation.navigate(screenName, { plantId });
    };

    const isActiveScreen = (screenName) => route.name === screenName;

    const getTextColor = (screenName) => {
        switch (screenName) {
            case 'Info':
                return isActiveScreen(screenName) ? '#00f' : '#000';
            case 'Propriete':
                return isActiveScreen(screenName) ? '#0f0' : '#000';
            case 'Utilisation':
                return isActiveScreen(screenName) ? '#f00' : '#000';
            case 'Precaution':
                return isActiveScreen(screenName) ? '#ff0' : '#000';
            default:
                return '#000';
        }
    };

    return (
        <View style={styles.navBar}>
            <TouchableOpacity onPress={() => navigateToScreen('Info')}>
                <Text style={{ color: getTextColor('Info') }}>Info</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigateToScreen('Propriete')}>
                <Text style={{ color: getTextColor('Propriete') }}>Propriete</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigateToScreen('Utilisation')}>
                <Text style={{ color: getTextColor('Utilisation') }}>Utilisation</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigateToScreen('Precaution')}>
                <Text style={{ color: getTextColor('Precaution') }}>Precaution</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    navBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
        height: 60,
        elevation: 3,
        paddingHorizontal: 15,
    },
});

export default PlantNavBar;
