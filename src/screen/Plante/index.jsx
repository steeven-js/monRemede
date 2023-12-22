import React, { useState, useEffect } from 'react';
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
import { fetchPlants } from '../../../redux/fetchApi';
import styles from './styles';

const Plantes = ({ navigation }) => {
    const [plantsData, setPlantsData] = useState(null);

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

        if (!plantsData) {
            fetchPlantsData();
        }
    }, [plantsData]); // Dependency array includes plantsData to refetch data when it changes

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
        <View style={styles.backgroundImage}>
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
