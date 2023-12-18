import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { addToFavorites } from '../../store/reducer/FavoritesSlice';
import BackIcon from 'react-native-vector-icons/Ionicons';
import StarIcon from 'react-native-vector-icons/FontAwesome6';

const PlantNavBar = ({ navigation, route }) => {
    const dispatch = useDispatch();

    console.log('Route in PlantNavBar:', route); // Log the entire route object

    const navigateToScreen = (screenName) => {
        navigation.navigate(screenName);
    };

    const addToFavoritesHandler = () => {
        console.log('Route.params in addToFavoritesHandler:', route.params); // Log route.params

        // Assuming you have the plantId and plantName in route.params
        const { plantId, plantName } = route.params || {};

        console.log('plantId:', plantId);
        console.log('plantName:', plantName);

        if (plantId && plantName) {
            dispatch(addToFavorites({ plantId, plantName }));
        } else {
            console.error('Missing plantId or plantName in route.params');
        }
    };

    // Utilisez le nom de la plante dans le composant
    const plantName = route.params?.plantName;

    return (
        <View style={styles.header}>
            <View style={styles.divAboveTabs}>
                <BackIcon name="arrow-back" size={30} color="#900" onPress={() => navigation.goBack()} />
                <Text>{plantName}</Text>
                <StarIcon onPress={addToFavoritesHandler} name="star" size={30} color="#900" />
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
