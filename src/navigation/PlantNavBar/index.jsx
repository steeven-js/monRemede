import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground, Image } from 'react-native';
import { useNavigation, useIsFocused, useRoute } from '@react-navigation/native';
import { firebase } from '@react-native-firebase/auth';
import BackIcon from 'react-native-vector-icons/Ionicons';
import StarIcon from 'react-native-vector-icons/FontAwesome6';
import styles from './styles';

const colorMapping = {
    Info: 'blue',
    Propriete: 'green',
    Utilisation: 'orange',
    Precaution: 'red',
};

const PlantNavBar = ({ route, screenNames }) => {
    const navigation = useNavigation();
    const isFocused = useIsFocused();
    const currentRoute = useRoute();
    const [user, setUser] = useState(null);
    const [activeScreen, setActiveScreen] = useState(screenNames[0]);

    useEffect(() => {
        if (isFocused) {
            setActiveScreen(currentRoute.name);
        }

        const unsubscribe = firebase.auth().onAuthStateChanged((authUser) => {
            setUser(authUser);
        });

        return () => unsubscribe();
    }, [isFocused, currentRoute]);

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

    return (
        <View style={styles.header}>
            <ImageBackground
                source={require('../../assets/images/plante/plante.jpg')}
                style={styles.background}
            >
                <View style={styles.TopNavBar}>
                    <View style={styles.TopNavBarContent}>
                        <TouchableOpacity style={styles.back}>
                            {route.params?.symptomeId ? (
                                <BackIcon name="arrow-back" size={30} color="#fff" onPress={backSymptomeDetail} />
                            ) : <BackIcon name="arrow-back" size={30} color="#fff" onPress={backPlantDetail} />}
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.star}>
                            <StarIcon name="star" size={30} color="#fff" onPress={addToFavoritesHandler} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.container}>
                    <View style={styles.content}>
                        {screenNames.map((screenName) => (
                            <TouchableOpacity
                                key={screenName}
                                onPress={() => {
                                    setActiveScreen(screenName);
                                    navigation.navigate(screenName);
                                }}
                                style={[styles.textColor, styles.tab, { borderBottomColor: isFocused && activeScreen === screenName ? colorMapping[screenName] : 'transparent' }]}
                            >
                                <Text style={[styles.textTopNavBar, styles.textColor]}>
                                    {screenName}
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>
            </ImageBackground>
        </View>
    );
};

export default PlantNavBar;
