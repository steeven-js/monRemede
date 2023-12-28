import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  Text,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import { useSelector } from 'react-redux';
import firestore from '@react-native-firebase/firestore';
import { firebase } from '@react-native-firebase/auth';

import styles from './styles';

const Plantes = ({ navigation }) => {
  const plantesData = useSelector((state) => state.plantes.data);
  const [user, setUser] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const initialLoad = useRef(true);

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

  const getPlantItemStyle = (item) => {
    const isFavorite = favorites.some((favorite) => favorite.plantId === item.id);
    return isFavorite ? styles.favoritePlant : styles.plant;
  };

  const renderPlantItem = ({ item }) => {
    const hasMedia = item.media && item.media.length > 0;
    const imageUrl = hasMedia ? item.media[0]?.original_url : null;

    return (
      <TouchableOpacity
        style={[
          getPlantItemStyle(item),
          styles.spacing,
        ]}
        onPress={() => {
          navigation.navigate('Info', {
            plantId: item.id,
            plantName: item.name,
          });
        }}
      >
        <Image
          source={imageUrl ? { uri: imageUrl } : require('../../assets/images/plante/no-image.png')}
          style={styles.plantImage}
        />
        <View style={styles.plantInfoContainer}>
          <Text style={styles.plantName}>{item.name}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.background}>
      <View style={styles.overlay}>
        {plantesData ? (
          <FlatList
            data={plantesData}
            renderItem={renderPlantItem}
            keyExtractor={(item) => item.id.toString()}
            numColumns={2}
            contentContainerStyle={styles.container}
            showsVerticalScrollIndicator={false}
          />
        ) : (
          <ActivityIndicator size="large" color="#00ff00" />
        )}
      </View>
    </View>
  );
};

export default Plantes;
