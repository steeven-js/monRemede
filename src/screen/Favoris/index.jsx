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
import Question from '../../components/paragraphs/Question';
import Link from '../../components/links/Link';
import * as Animatable from 'react-native-animatable';

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

        return unsubscribe;
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
        const plant = plantsData.find((p) => p.id === item.plantId) || {};

        const hasMedia = plant.media && plant.media.length > 0;
        const imageUrl = hasMedia ? plant.media[0]?.original_url : null;

        return (
            <TouchableOpacity
                style={styles.favorite}
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
            {!isLoading && !user && (
                <View style={styles.loginButtonContainer}>
                    <Button
                        title="Se connecter"
                        onPress={() => {
                            navigation.navigate('Se connecter')
                        }}
                        disabled={isLoading}
                    />
                </View>
            )}
            <View style={styles.overlay}>
                {isLoading && (
                    <View style={styles.loadingContainer}>
                        <ActivityIndicator size="large" color="#00ff00" />
                    </View>
                )}

                {error && (
                    <Text style={styles.errorText}>
                        Une erreur s'est produite : {error.message}
                    </Text>
                )}

                {!isLoading && !error && plantsData && user && (
                    <>
                        {favorites.length === 0 ? (
                            <View style={styles.noFavorite}>
                                <Animatable.View
                                    animation="fadeInUp"
                                    delay={100}
                                    style={styles.questionAndLinkWrapper}>

                                    {/* Question component */}
                                    <Question question="Vous n'avez pas de plante dans vos favoris" />
                                </Animatable.View>
                                <Animatable.View
                                    animation="fadeInUp"
                                    delay={300}
                                    style={styles.questionAndLinkWrapper}>

                                    {/* Link component */}
                                    <Link
                                        label="Découvrir nos plantes médicinales"
                                        onPress={() => navigation.navigate("Home")}
                                    />
                                </Animatable.View>
                            </View>
                        ) : (
                            <FlatList
                                data={favorites}
                                keyExtractor={(item) => item.id}
                                renderItem={renderItem}
                                numColumns={2}
                                refreshing={isLoading}
                                showsVerticalScrollIndicator={false}
                                onRefresh={refetch}
                            />
                        )}
                    </>
                )}
            </View>
        </View>
    );
};

export default Favoris;
