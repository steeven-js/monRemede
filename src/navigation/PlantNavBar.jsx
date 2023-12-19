import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useDispatch } from 'react-redux';
import { addToFavorites } from '../../store/reducer/FavoritesSlice';
import BackIcon from 'react-native-vector-icons/Ionicons';
import StarIcon from 'react-native-vector-icons/FontAwesome6';

const PlantNavBar = ({ navigation, route }) => {
    const dispatch = useDispatch();

    // console.log('Route in PlantNavBar:', route);

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
            {/* Parent container for the ImageBackground */}
            <View>
                <ImageBackground
                    source={require('../assets/images/plante.jpg')}
                    style={styles.backgroundImage}
                >
                    {/* Icons placed at the top of the ImageBackground */}
                    <View style={styles.divAboveTabs}>
                        <View style={styles.divAboveTabsContent}>
                            <BackIcon name="arrow-back" size={30} color="#fff" onPress={() => navigation.navigate('Plantes médicinales')} />
                            <StarIcon onPress={addToFavoritesHandler} name="star" size={30} color="#fff" />
                        </View>
                    </View>
                    <View style={styles.container}>
                        <View style={styles.content}>
                            {/* Rest of your components */}
                            <TouchableOpacity onPress={() => navigateToScreen('Info')} >
                                <Text style={styles.divText}>Info</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigateToScreen('Propriete')} >
                                <Text style={styles.divText}>Propriéte</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigateToScreen('Utilisation')} >
                                <Text style={styles.divText}>Utilisation</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigateToScreen('Precaution')} >
                                <Text style={styles.divText}>Précaution</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ImageBackground>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    backgroundImage: {
        height: 200,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    divAboveTabs: {
        padding: 10,
        position: 'absolute',
        top: 0,
        width: '100%',
    },
    divAboveTabsContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    container: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
    },
    content: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.4)', // couleur noire semi-transparente
    },
    divText: {
        fontSize: 18,
        color: 'white',
        fontFamily: 'Dosis-Regular',
    },
});

export default PlantNavBar;
