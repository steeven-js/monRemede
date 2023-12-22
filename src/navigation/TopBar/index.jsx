import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import HeartIcon from 'react-native-vector-icons/FontAwesome6';
import StarIcon from 'react-native-vector-icons/FontAwesome6';
import LeafIcon from 'react-native-vector-icons/FontAwesome';
import SearchIcon from 'react-native-vector-icons/Ionicons';
import MenuIcon from 'react-native-vector-icons/Ionicons';
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
                <MenuIcon name="menu" size={30} color="#fff" onPress={() => navigation.openDrawer()} />
                <Text style={styles.textTopNavBar}>{route && route.name}</Text>
                <SearchIcon name="search" size={30} color="#fff" />
            </View>

            {/* Onglets */}
            <View style={styles.container}>
                <TouchableOpacity onPress={() => navigateToScreen('Usages thérapeutiques')} style={[styles.tab, route && route.name === 'Usages thérapeutiques' && styles.activeTab1]}>
                    <HeartIcon name="heart-pulse" size={30} color="#fff" style={styles.icon} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigateToScreen('Plantes médicinales')} style={[styles.tab, route && route.name === 'Plantes médicinales' && styles.activeTab2]}>
                    <LeafIcon name="leaf" size={30} color="#fff" style={styles.icon} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigateToScreen('Favoris')} style={[styles.tab, route && route.name === 'Favoris' && styles.activeTab3]}>
                    <StarIcon name="star" size={30} color="#fff" style={styles.icon} />
                </TouchableOpacity>
            </View>
        </LinearGradient>
    );
};

export default TopBar;
