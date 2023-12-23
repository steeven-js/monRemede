import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import BackIcon from 'react-native-vector-icons/Ionicons';
import StarIcon from 'react-native-vector-icons/FontAwesome6';
import styles from './styles';

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
        <View>
            <View>
                <ImageBackground
                    source={require('../../assets/images/plante/plante.jpg')}
                    style={styles.backgroundImage}
                >
                    <View style={styles.divAboveTabs}>
                        <View style={styles.divAboveTabsContent}>
                            <BackIcon name="arrow-back" size={30} color="#fff" onPress={() => navigation.navigate('Plantes médicinales')} />
                            <StarIcon name="star" size={30} color="#fff"/>
                        </View>
                    </View>
                </ImageBackground>
            </View>
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
        </View>
    );
};

export default PlantNavBar;
