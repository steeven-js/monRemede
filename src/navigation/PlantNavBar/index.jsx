import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { firebase } from '@react-native-firebase/auth';
import BackIcon from 'react-native-vector-icons/Ionicons';
import StarIcon from 'react-native-vector-icons/FontAwesome6';
import { useNavigation, useIsFocused, useRoute } from '@react-navigation/native';
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

    // console.log('route', route);

    useEffect(() => {
        // Update the active screen when the screen changes
        if (isFocused) {
            setActiveScreen(currentRoute.name);
        }
        // Vérifiez l'état d'authentification actuel lors de l'initialisation du composant
        const unsubscribe = firebase.auth().onAuthStateChanged((authUser) => {
            setUser(authUser);
        });

        // Nettoyez l'écouteur lors de la suppression du composant pour éviter les fuites de mémoire
        return () => unsubscribe();
    }, [isFocused, currentRoute]);

    const addToFavoritesHandler = async () => {
        // Assurez-vous que l'utilisateur est connecté
        if (!user) {
            console.log("L'utilisateur n'est pas connecté");
            return;
        }

        try {
            const plantId = route.params?.plantId;

            // Vérifiez si la combinaison d'ID de plante et d'utilisateur existe déjà dans la collection "favoris"
            const existingFavoriteQuery = await firebase.firestore().collection('favoris')
                .where('userId', '==', user.uid)
                .where('plantId', '==', plantId)
                .get();

            if (!existingFavoriteQuery.empty) {
                // Si la combinaison existe, supprimez le document et affichez un message
                const existingFavoriteDoc = existingFavoriteQuery.docs[0];
                await existingFavoriteDoc.ref.delete();
                console.log("Plante retirée des favoris avec succès!");
                return;
            }

            // Ajoutez la plante aux favoris si elle n'existe pas encore
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
    }

    return (
        <View style={styles.header}>
            <View>
                <ImageBackground
                    source={require('../../assets/images/plante/plante.jpg')}
                    style={styles.backgroundImage}
                >
                    <View style={styles.divAboveTabs}>
                        <View style={styles.divAboveTabsContent}>
                            <TouchableOpacity style={styles.back}>
                                {route.params?.symptomeId ? (
                                    <BackIcon name="arrow-back" size={30} color="#fff" onPress={backSymptomeDetail} />
                                ) : <BackIcon name="arrow-back" size={30} color="#fff" onPress={() => navigation.goBack()} />}
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
                                    <Text style={[styles.divText, styles.textColor]}>
                                        {screenName}
                                    </Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                    </View>
                </ImageBackground>
            </View>
        </View>
    );
}

export default PlantNavBar;
