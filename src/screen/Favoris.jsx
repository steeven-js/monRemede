import React, { useEffect, useRef, useState } from 'react';
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity, Button, Dimensions } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import { firebase } from '@react-native-firebase/auth';

const Favoris = ({ navigation }) => {
    const [user, setUser] = useState(null);
    const [favorites, setFavorites] = useState([]);
    const [plantsData, setPlantsData] = useState([]);
    const initialLoad = useRef(true);

    useEffect(() => {
        const unsubscribe = firebase.auth().onAuthStateChanged((authUser) => {
            setUser(authUser);
            if (authUser && initialLoad.current) {
                loadFavorites(authUser.uid);
                fetchPlantsData(); // Nouvelle fonction pour récupérer les données des plantes
                initialLoad.current = false;
            }
        });

        return () => unsubscribe();
    }, []);

    const loadFavorites = async (userId) => {
        try {
            const favoritesSnapshot = await firestore().collection('favoris').where('userId', '==', userId).get();
            const favoritePlants = favoritesSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setFavorites(favoritePlants);
        } catch (error) {
            console.error("Erreur lors du chargement des favoris :", error);
        }
    };

    const fetchPlantsData = async () => {
        try {
            const res = await fetch('http://apimonremede.jsprod.fr/api/plants/');
            if (!res.ok) {
                throw new Error('Failed to fetch plants');
            }
            const plants = await res.json();
            setPlantsData(plants);
        } catch (error) {
            console.error('Error fetching plants:', error);
        }
    };

    return (
        <ImageBackground
            source={require('../assets/images/backgrounds/fond4.jpg')}
            style={styles.backgroundImage}
        >
            <View style={styles.overlay}>
                <View style={styles.container}>
                    <View>
                        {favorites.length === 0 && <Text>No favorites yet.</Text>}
                        {!user && (
                            <Button title="Se connecter" onPress={() => { navigation.navigate('LoginScreen') }} />
                        )}
                        {user && favorites.length > 0 && plantsData.length > 0 && (
                            <View style={styles.gridContainer}>
                                {favorites.map(favorite => {
                                    const plant = plantsData.find(p => p.id === favorite.plantId);
                                    return (
                                        <TouchableOpacity
                                            key={favorite.id}
                                            style={styles.favorite}
                                            onPress={() => { /* Naviguez vers les détails de la plante si nécessaire */ }}
                                        >
                                            <View style={styles.favoriteInfoContainer}>
                                                <Text style={styles.favoriteName}>{plant ? plant.name : 'Unknown Plant'}</Text>
                                            </View>
                                        </TouchableOpacity>
                                    );
                                })}
                            </View>
                        )}
                    </View>
                </View>
            </View>
        </ImageBackground>
    );
};

const { width } = Dimensions.get('window');
const numColumns = 2;
const columnWidth = width / numColumns;

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
    },
    container: {
        backgroundColor: 'transparent',
        padding: 10,
    },
    gridContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    favorite: {
        width: columnWidth - 20,
        height: columnWidth - 20,
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.6)',
        borderRadius: 5,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
    },
    favoriteInfoContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        padding: 5,
    },
    favoriteName: {
        color: 'white',
        textAlign: 'center',
        fontFamily: 'Dosis-Regular',
    },
});

export default Favoris;
