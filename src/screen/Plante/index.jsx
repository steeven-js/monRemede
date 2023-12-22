import React from 'react';
import { View, StyleSheet, ImageBackground, Dimensions, TouchableOpacity, Image, Text, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPlants } from '../../../redux/fetchApi';
import styles from './styles';

const Plantes = ({ navigation }) => {
    const dispatch = useDispatch();
    const plantsData = useSelector((state) => state.plants.data);

    if (!plantsData) {
        dispatch(fetchPlants());
    }

    const renderPlantItem = ({ item }) => (
        <TouchableOpacity
            style={[styles.plant, styles.spacing]}
            onPress={() => {
                navigation.navigate('Info', {
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
        <View
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
        </View>
    );
};

export default Plantes;
