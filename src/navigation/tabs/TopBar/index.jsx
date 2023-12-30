import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import SearchIcon from 'react-native-vector-icons/Ionicons';
import MenuIcon from 'react-native-vector-icons/Ionicons';

import { icons } from '../../../constants';

import styles from './styles';

const TopBar = ({ navigation, route }) => {
    const navigateToScreen = (screenName) => {
        navigation.navigate(screenName);
    };

    return (
        <LinearGradient
            colors={['#2e6a30', '#439a46']} // Dégradé de deux tons de vert foncé
            locations={[0, 0.65]} // Positions relatives des couleurs
            useAngle
            angle={180}
            style={styles.header}
        >
            {/* Div au-dessus des onglets */}
            <View style={styles.TopNavBar}>
                {/* <MenuIcon name="menu" size={30} color="#fff" onPress={() => navigation.openDrawer()} /> */}
                <MenuIcon name="menu" size={30} color="#fff" onPress={() => {console.log('hello');}} />
                <Text style={styles.textTopNavBar}>{route && route.name}</Text>
                <SearchIcon name="search" size={30} color="#fff" />
            </View>

            {/* Onglets */}
            <View style={styles.container}>
                <TouchableOpacity onPress={() => navigateToScreen('Usages thérapeutiques')} style={[styles.tab, route && route.name === 'Usages thérapeutiques' && styles.activeTab1]}>
                    <Image source={icons.soin} style={styles.icon} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigateToScreen('Plantes médicinales')} style={[styles.tab, route && route.name === 'Plantes médicinales' && styles.activeTab2]}>
                    <Image source={icons.plante} style={styles.icon} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigateToScreen('Favoris')} style={[styles.tab, route && route.name === 'Favoris' && styles.activeTab3]}>
                    <Image source={icons.favoris} style={styles.icon} />
                </TouchableOpacity>
            </View>
        </LinearGradient>
    );
};

export default TopBar;
