import React, { useEffect, useRef, useState } from 'react';
import { View, Text, TouchableOpacity, Button, Image, FlatList } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import { firebase } from '@react-native-firebase/auth';
import styles from './styles';

const Favoris = ({ route, navigation }) => {
    const [user, setUser] = useState(null);
    const [favorites, setFavorites] = useState([]);
    const [plantsData, setPlantsData] = useState([]);
    const initialLoad = useRef(true);

    useEffect(() => {
        const unsubscribe = firebase.auth().onAuthStateChanged((authUser) => {
            setUser(authUser);
            if (authUser && initialLoad.current) {
                loadFavorites(authUser.uid);
                fetchPlantsData();
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

    const renderItem = ({ item }) => {
        const plant = plantsData.find(p => p.id === item.plantId);
        return (
            <TouchableOpacity
                style={styles.favorite}
                onPress={() => {
                    navigation.navigate('Info', { plantId: item.plantId, originRoute: route.name });
                }}
            >
                <Image
                    source={require('../../assets/images/plante/plante.jpg')}
                    style={styles.plantImage}
                />
                <View style={styles.favoriteInfoContainer}>
                    <Text style={styles.favoriteName}>{plant ? plant.name : 'Unknown Plant'}</Text>
                </View>
            </TouchableOpacity>
        );
    };

    return (
        <View style={styles.background}>
            <View style={styles.overlay}>
                <View style={styles.container}>
                    <View>
                        {favorites.length === 0 && <Text>No favorites yet.</Text>}
                        {!user && (
                            <Button title="Se connecter" onPress={() => { navigation.navigate('LoginScreen') }} />
                        )}
                        {user && favorites.length > 0 && plantsData.length > 0 && (
                            <FlatList
                                data={favorites}
                                keyExtractor={item => item.id}
                                renderItem={renderItem}
                                numColumns={2}
                            />
                        )}
                    </View>
                </View>
            </View>
        </View>
    );
};

export default Favoris;
