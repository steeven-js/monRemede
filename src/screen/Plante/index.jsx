import React from 'react';
import { View, StyleSheet, ImageBackground, Dimensions, TouchableOpacity, Image, Text, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPlants } from '../../../redux/fetchApi';
import styles from './styles';

const Plantes = ({ navigation }) => {
    const dispatch = useDispatch();
    const plantsData = useSelector((state) => state.plants.data);

    // Check if data is already available, if not, fetch it
    if (!plantsData) {
        dispatch(fetchPlants());
    }

    const renderPlantItem = ({ item }) => (
        <TouchableOpacity
            style={[styles.plant, styles.spacing]}
            onPress={() => {
                navigation.navigate('PlantScreen', {
                    plantId: item.id,
                    plantName: item.name,
                });
            }}
        >
            <Image
                source={require('../../assets/images/plante/plante.jpg')} 
                style={{ width: '100%', height: '100%', borderRadius: 5 }}
            />
            <View style={styles.plantInfoContainer}>
                <Text style={styles.plantName}>{item.name}</Text>
            </View>
        </TouchableOpacity>
    );

    return (
        <ImageBackground
            source={require('../../assets/images/backgrounds/fond4.jpg')}
            style={styles.backgroundImage}
        >
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
        </ImageBackground>
    );
};

export default Plantes;
