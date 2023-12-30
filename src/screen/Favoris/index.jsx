import React, { useEffect, useRef, useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Button,
    Image,
    FlatList,
    ActivityIndicator,
} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import { firebase } from '@react-native-firebase/auth';
import useFetchPlants from '../../../hook/useFetchPlants';
import styles from './styles';

const Favoris = ({ route, navigation }) => {
    const [user, setUser] = useState(null);
    const [favorites, setFavorites] = useState([]);
    const initialLoad = useRef(true);
    const { data: plantsData, isLoading, error, refetch } = useFetchPlants();

    useEffect(() => {
        const unsubscribe = firebase.auth().onAuthStateChanged((authUser) => {
            setUser(authUser);
            if (authUser && initialLoad.current) {
                loadFavorites(authUser.uid);
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
            const favoritePlants = favoritesSnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setFavorites(favoritePlants);
        } catch (error) {
            console.error('Error loading favorites:', error);
        }
    };

    const renderItem = ({ item }) => {
        const plant = plantsData.find((p) => p.id === item.plantId);

        if (!plant) {
            // Handle the case where plant is undefined
            return (
                <View style={styles.favorite}>
                    <Image
                        source={require('../../assets/images/plante/no-image.png')}
                        style={styles.plantImage}
                    />
                    <View style={styles.favoriteInfoContainer}>
                        <Text style={styles.favoriteName}>Unknown Plant</Text>
                    </View>
                </View>
            );
        }

        const hasMedia = plant.media && plant.media.length > 0;
        const imageUrl = hasMedia ? plant.media[0]?.original_url : null;

        return (
            <TouchableOpacity
                style={styles.favorite}
                // onPress={() => {
                //     navigation.navigate('Info', {
                //         plantId: item.plantId,
                //         originRoute: route.name,
                //     });
                // }}
                onPress={() => {
                    navigation.navigate('PlanteStack', {
                        screen: 'Info',
                        params: {
                            plantId: item.plantId,
                            originRoute: route.name,
                        },
                    })
                }}
            >
                <Image
                    source={
                        imageUrl
                            ? { uri: imageUrl }
                            : require('../../assets/images/plante/no-image.png')
                    }
                    style={styles.plantImage}
                />
                <View style={styles.favoriteInfoContainer}>
                    <Text style={styles.favoriteName}>
                        {plant.name || 'Unknown Plant'}
                    </Text>
                </View>
            </TouchableOpacity>
        );
    };

    return (
        <View style={styles.background}>
            <View style={styles.overlay}>
                {plantsData ? (
                    <FlatList
                        data={favorites}
                        keyExtractor={(item) => item.id}
                        renderItem={renderItem}
                        numColumns={2}
                        onRefresh={refetch}
                        refreshing={isLoading}
                        onEndReachedThreshold={0.5}
                        onEndReached={() => {
                            // console.log('End reached');
                        }}
                    />
                ) : (
                    <ActivityIndicator size="large" color="#00ff00" />
                )}
            </View>
        </View>
    );
};

export default Favoris;
