import React, { useState, useEffect, useRef } from 'react';
import { View, TouchableOpacity, Image, Text, FlatList, ActivityIndicator, } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import { firebase } from '@react-native-firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { setFetchedData, selectFetchedData } from '../../../redux/reducer/plantSlice';
import axios from 'axios';
import styles from './styles';

const Plantes = ({ navigation }) => {
    const [user, setUser] = useState(null);
    const [favorites, setFavorites] = useState([]);
    const initialLoad = useRef(true);
    const dispatch = useDispatch();
    const plantsData = useSelector(selectFetchedData);

    const fetchPlants = async () => {
        try {
            const response = await axios.get('http://apimonremede.jsprod.fr/api/plants/');
            dispatch(setFetchedData(response.data));
        } catch (error) {
            console.error('Error fetching plants:', error);
        }
    };

    useEffect(() => {

        const unsubscribe = firebase.auth().onAuthStateChanged((authUser) => {
            setUser(authUser);
            if (authUser && initialLoad.current) {
                loadFavorites(authUser.uid);
                initialLoad.current = false;
            }
        });

        fetchPlants();
        return () => unsubscribe();
    }, [dispatch]);

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
                        onRefresh={fetchPlants}
                        refreshing={!plantsData}
                        onEndReachedThreshold={0.5}
                        onEndReached={() => {
                            console.log('End reached');
                        }}
                    />
                ) : (
                    <ActivityIndicator size="large" color="#00ff00" />
                )}
            </View>
        </View>
    );
};

export default Plantes;
