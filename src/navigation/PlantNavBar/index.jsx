import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, ImageBackground } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { firebase } from '@react-native-firebase/auth';
import BackIcon from 'react-native-vector-icons/Ionicons';
import StarIcon from 'react-native-vector-icons/FontAwesome6';
import styles from './styles';

const PlantNavBar = ({ plantId }) => {
    const navigation = useNavigation();
    const route = useRoute();
    const [user, setUser] = useState(null);

    const navigateToScreen = (screenName) => {
        navigation.navigate(screenName, {
            plantId,
            originRoute: route.params?.originRoute,
            symptomeId: route.params?.symptomeId,
            symptomeName: route.params?.symptomeName,
        });
    };

    const isActiveScreen = (screenName) => route.name === screenName;

    const getTextColor = (screenName) => {
        switch (screenName) {
            case 'Info':
                return isActiveScreen(screenName) ? '#00f' : '#000';
            case 'Propriete':
                return isActiveScreen(screenName) ? '#0f0' : '#000';
            case 'Utilisation':
                return isActiveScreen(screenName) ? '#ff0' : '#000';
            case 'Precaution':
                return isActiveScreen(screenName) ? '#f00' : '#000';
            default:
                return '#000';
        }
    };

    const addToFavoritesHandler = async () => {
        if (!user) {
            console.log("L'utilisateur n'est pas connecté");
            return;
        }

        try {
            const plantId = route.params?.plantId;
            const existingFavoriteQuery = await firebase.firestore().collection('favoris')
                .where('userId', '==', user.uid)
                .where('plantId', '==', plantId)
                .get();

            if (!existingFavoriteQuery.empty) {
                const existingFavoriteDoc = existingFavoriteQuery.docs[0];
                await existingFavoriteDoc.ref.delete();
                console.log("Plante retirée des favoris avec succès!");
                return;
            }

            await firebase.firestore().collection('favoris').add({
                userId: user.uid,
                plantId: plantId,
            });

            console.log("Plante ajoutée aux favoris avec succès!");
        } catch (error) {
            console.error("Erreur lors de la gestion des favoris:", error);
        }
    };

    const backSymptomeDetail = () => {
        navigation.navigate('SymptomeDetail', {
            symptomeId: route.params?.symptomeId,
            symptomeName: route.params?.symptomeName
        });

        // console.log('symptomeId', route.params?.symptomeId, 'symptomeName', route.params?.symptomeName);
    };

    const backPlantDetail = () => {
        navigation.navigate('Plantes médicinales');
    };

    const backFavoris = () => {
        navigation.navigate('Favoris');
    };

    const backToOriginRoute = () => {
        if (route.params?.originRoute === 'SymptomeDetail') {
            backSymptomeDetail();
        } else if (route.params?.originRoute === 'Plantes médicinales') {
            backPlantDetail();
        } else if (route.params?.originRoute === 'Favoris') {
            backFavoris();
        } else {
            // Handle unrecognized or undefined originRoute
            console.warn('Unrecognized or undefined originRoute:', route.params?.originRoute);
        }
    };

    useEffect(() => {
        const unsubscribe = firebase.auth().onAuthStateChanged((authUser) => {
            setUser(authUser);
        });

        return () => unsubscribe();
    }, [])


    return (
        <View>
            <View>
                <ImageBackground
                    source={require('../../assets/images/plante/plante.jpg')}
                    style={styles.backgroundImage}
                >
                    <View style={styles.divAboveTabs}>
                        <View style={styles.divAboveTabsContent}>
                            <TouchableOpacity style={styles.back} onPress={backToOriginRoute}>
                                <BackIcon name="arrow-back" size={30} color="#fff" />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.star}>
                                <StarIcon name="star" size={30} color="#fff" onPress={addToFavoritesHandler} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </ImageBackground>
            </View >
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
        </View >
    );
};

export default PlantNavBar;
