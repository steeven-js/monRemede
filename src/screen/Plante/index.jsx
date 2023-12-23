import React, { useState, useEffect, useRef } from 'react';
import {
    View,
    StyleSheet,
    ImageBackground,
    Dimensions,
    TouchableOpacity,
    Image,
    Text,
    FlatList,
} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import { firebase } from '@react-native-firebase/auth';
import styles from './styles';

const Plantes = ({ navigation }) => {
    const [user, setUser] = useState(null);
    const [plantsData, setPlantsData] = useState(null);
    const [favorites, setFavorites] = useState([]);
    const initialLoad = useRef(true);

    useEffect(() => {
        const fetchPlantsData = async () => {
            try {
                const response = await fetch('http://apimonremede.jsprod.fr/api/plants/');
                const data = await response.json();
                setPlantsData(data);
            } catch (error) {
                console.error('Error fetching plants:', error);
            }
        };

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
            const favoritesSnapshot = await firestore()
                .collection('favoris')
                .where('userId', '==', userId)
                .get();
            const favoritePlants = favoritesSnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data(),
            }));
            setFavorites(favoritePlants);
        } catch (error) {
            console.error('Error loading favorites:', error);
        }
    };

    const getPlantItemStyle = (item) => {
        const isFavorite = favorites.some(favorite => favorite.plantId === item.id);
        return isFavorite ? styles.favoritePlant : styles.plant;
    };

    const renderPlantItem = ({ item }) => (
        <TouchableOpacity
            style={[
                getPlantItemStyle(item),
                styles.spacing,
            ]}
            onPress={() => {
                navigation.navigate('Info', {
                    plantId: item.id,
                    plantName: item.name,
                    originRoute: 'Plantes médicinales',
                });
            }}
        >
            <Image
                source={require('../../assets/images/plante/plante.jpg')}
                style={styles.plantImage}
            />
            <View style={styles.plantInfoContainer}>
                <Text style={styles.plantName}>{item.name}</Text>
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={styles.background}>
            <View style={styles.overlay}>
                {plantsData ? (
                    <FlatList
                        data={plantsData}
                        renderItem={renderPlantItem}
                        keyExtractor={(item) => item.id.toString()}
                        numColumns={2}
                        contentContainerStyle={styles.container}
                    />
                ) : (
                    <Text>Loading...</Text>
                )}
            </View>
        </View>
    );
};

export default Plantes;
