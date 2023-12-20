import { View, Text, ImageBackground, StyleSheet, ScrollView, Dimensions, TouchableOpacity, Image } from 'react-native';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPlant } from '../../../redux/fetchApi';
import styles from './styles';

const Utilisation = ({ route }) => {
    const { plantId } = route.params;
    const dispatch = useDispatch();

    // Fetch plant data on component mount
    useEffect(() => {
        dispatch(fetchPlant(plantId));
    }, [dispatch, plantId]);

    // Retrieve the plant data from the Redux store
    const plant = useSelector((state) => state.plants.selectedPlant);

    if (!plant) {
        // If the data is not available yet, you can render a loading indicator or return null
        return (
            <View>
                <Text>Loading...</Text>
            </View>
        );
    }

    // Extract the relevant information from the plant data
    const { utilisations } = plant;

    // Filter utilisations based on type (interne or externe)
    const utilisationsInterne = utilisations.filter(item => item.type === 'interne');
    const utilisationsExterne = utilisations.filter(item => item.type === 'externe');

    return (
        <ImageBackground
            source={require('../../assets/images/backgrounds/fond4.jpg')}
            style={styles.backgroundImage}
        >
            <View style={styles.overlay}>
                <View style={styles.container}>
                    <View style={styles.content}>
                        <View style={styles.section}>
                            <Text style={styles.title}>Utilisations</Text>
                        </View>
                        <View style={[styles.section, styles.borderBottom]}>
                            <Text style={styles.soustitre}>Usage Interne</Text>
                            {utilisationsInterne.map((utilisationItem) => (
                                <Text key={utilisationItem.id} style={styles.text}>
                                    {utilisationItem.value}
                                </Text>
                            ))}
                        </View>
                        <View style={styles.section}>
                            <Text style={styles.soustitre}>Usage Externe</Text>
                            {utilisationsExterne.map((utilisationItem) => (
                                <Text key={utilisationItem.id} style={styles.text}>
                                    {utilisationItem.value}
                                </Text>
                            ))}
                        </View>
                    </View>
                </View>
            </View>
        </ImageBackground>
    );
}

export default Utilisation;
