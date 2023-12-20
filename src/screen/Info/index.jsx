import { View, Text, ImageBackground, StyleSheet, ScrollView, Dimensions, TouchableOpacity, Image } from 'react-native';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPlant } from '../../../redux/fetchApi';
import styles from './styles';

const Info = ({ route }) => {
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

    return (
        <ImageBackground
            source={require('../../assets/images/backgrounds/fond4.jpg')}
            style={styles.backgroundImage}
        >
            <View style={styles.overlay}>
                <View style={styles.container}>
                    <View style={styles.content}>

                        <View style={styles.section}>
                            <Text style={styles.title}>{plant.name}</Text>
                        </View>

                        <View style={[styles.section, styles.borderBottom]}>
                            <Text>
                                <Text style={styles.bold}>
                                    N.Scient:{' '}
                                </Text>
                                {plant.nscient}</Text>
                            <Text>
                                <Text style={styles.bold}>
                                    Famille:{' '}
                                </Text>
                                {plant.famille}</Text>
                            <Text>
                                <Text style={styles.bold}>
                                    Genre:{' '}
                                </Text>
                                {plant.genre}</Text>
                        </View>

                        <View style={[styles.section, styles.borderBottom]}>
                            <Text style={styles.soustitre}>Description</Text>
                            <Text>{plant.description}</Text>
                        </View>

                        <View style={[styles.section, styles.borderBottom]}>
                            <Text style={styles.soustitre}>Habitat</Text>
                            <Text>{plant.habitat}</Text>
                        </View>

                    </View>
                </View>
            </View>
        </ImageBackground>
    );
}

export default Info;