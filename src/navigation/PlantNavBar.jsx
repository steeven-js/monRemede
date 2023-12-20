import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { firebase } from '@react-native-firebase/auth'; // Importez le module d'authentification Firebase
import BackIcon from 'react-native-vector-icons/Ionicons';
import StarIcon from 'react-native-vector-icons/FontAwesome6';

const PlantNavBar = ({ navigation, route }) => {

    const [user, setUser] = useState(null);

    useEffect(() => {
        // Vérifiez l'état d'authentification actuel lors de l'initialisation du composant
        const unsubscribe = firebase.auth().onAuthStateChanged((authUser) => {
            setUser(authUser);
        });

        // Nettoyez l'écouteur lors de la suppression du composant pour éviter les fuites de mémoire
        return () => unsubscribe();
    }, []);

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


    const navigateToScreen = () => {
        navigation.navigate();
    };

    const plantName = route.params?.plantName;

    return (
        <View style={styles.header}>
            {/* Parent container for the ImageBackground */}
            <View>
                <ImageBackground
                    source={require('../assets/images/plante/plante.jpg')}
                    style={styles.backgroundImage}
                >
                    {/* Icons placed at the top of the ImageBackground */}
                    <View style={styles.divAboveTabs}>
                        <View style={styles.divAboveTabsContent}>
                            <BackIcon name="arrow-back" size={30} color="#fff" onPress={() => navigation.navigate('Plantes médicinales')} />
                            <StarIcon name="star" size={30} color="#fff" onPress={addToFavoritesHandler} />
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
