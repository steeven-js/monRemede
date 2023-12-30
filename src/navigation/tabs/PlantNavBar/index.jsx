import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, ImageBackground, Image } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { firebase } from '@react-native-firebase/auth';
import BackIcon from 'react-native-vector-icons/Ionicons';
import StarIcon from 'react-native-vector-icons/FontAwesome6';
import styles from './styles';

import { icons } from '../../../constants';

const Colors = {
    active: '#00f',
    inactive: '#000',
};

const PlantNavBar = ({ data, plantId }) => {
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
                return isActiveScreen(screenName) ? Colors.active : Colors.inactive;
            case 'Propriete':
                return isActiveScreen(screenName) ? '#0f0' : Colors.inactive;
            case 'Utilisation':
                return isActiveScreen(screenName) ? '#ff0' : Colors.inactive;
            case 'Precaution':
                return isActiveScreen(screenName) ? '#f00' : Colors.inactive;
            default:
                return Colors.inactive;
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
    };

    const backPlantDetail = () => {
        navigation.navigate('Plantes médicinales');
    };

    const backFavoris = () => {
        navigation.navigate('Favoris');
    };

    const backToOriginRoute = () => {
        const { originRoute } = route.params;
        switch (originRoute) {
            case 'SymptomeDetail':
                return backSymptomeDetail();
            case 'Plantes médicinales':
                return backPlantDetail();
            case 'Favoris':
                return backFavoris();
            default:
                return navigation.navigate('Plantes médicinales');
        }
    };

    useEffect(() => {
        const unsubscribe = firebase.auth().onAuthStateChanged((authUser) => {
            setUser(authUser);
        });

        return () => unsubscribe();
    }, []);

    const hasMedia = data.media && data.media.length > 0;
    const imageUrl = hasMedia ? data.media[0]?.original_url : null;

    return (
        <View>
            <View>
                <ImageBackground
                    source={imageUrl ? { uri: imageUrl } : require('../../../assets/images/plante/no-image.png')}
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
            <View style={styles.container}>
                <View style={styles.content}>
                    <TouchableOpacity
                        onPress={() => navigateToScreen('Info')}
                        style={[
                            styles.touchableOpacity,
                            {
                                borderBottomColor: getTextColor('Info'),
                                borderBottomWidth: isActiveScreen('Info') ? 2 : 0,
                            },
                        ]}
                    >
                        <Image source={icons.info} style={styles.icon} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigateToScreen('Propriete')}
                        style={[
                            styles.touchableOpacity,
                            {
                                borderBottomColor: getTextColor('Propriete'),
                                borderBottomWidth: isActiveScreen('Propriete') ? 2 : 0,
                            },
                        ]}
                    >
                        <Image source={icons.propriete} style={styles.icon} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigateToScreen('Utilisation')}
                        style={[
                            styles.touchableOpacity,
                            {
                                borderBottomColor: getTextColor('Utilisation'),
                                borderBottomWidth: isActiveScreen('Utilisation') ? 2 : 0,
                            },
                        ]}
                    >
                        <Image source={icons.usage} style={styles.icon} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigateToScreen('Precaution')}
                        style={[
                            styles.touchableOpacity,
                            {
                                borderBottomColor: getTextColor('Precaution'),
                                borderBottomWidth: isActiveScreen('Precaution') ? 2 : 0,
                            },
                        ]}
                    >
                        <Image source={icons.caution} style={styles.icon} />
                    </TouchableOpacity>
                </View>
            </View>
        </View >
    );
};

export default PlantNavBar;
