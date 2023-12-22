import React, { useState, useEffect } from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import { fetchPlant } from '../../../redux/fetchApi';
import styles from './styles';

const Info = ({ route }) => {
    const { plantId } = route.params;
    const [plant, setPlant] = useState(null);

    // Fetch plant data on component mount
    useEffect(() => {
        const fetchPlant = async () => {
            try {
                const response = await fetch(`http://apimonremede.jsprod.fr/api/plants/${plantId}`);
                const data = await response.json();
                setPlant(data);
            } catch (error) {
                console.error('Error fetching plant:', error);
            }
        };

        fetchPlant()
    }, [plantId]);

    if (!plant) {
        // If the data is not available yet, you can render a loading indicator or return null
        return (
            <View>
                <Text>Loading...</Text>
            </View>
        );
    }

    return (
        <View style={styles.background}>
            <View style={styles.overlay}>
                <View style={styles.container}>
                    <View style={styles.content}>
                        <View style={styles.section}>
                            <Text style={styles.title}>{plant.name}</Text>
                        </View>

                        <View style={[styles.section, styles.borderBottom]}>
                            <Text>
                                <Text style={styles.bold}>N.Scient:{' '}</Text>
                                {plant.nscient}
                            </Text>
                            <Text>
                                <Text style={styles.bold}>Famille:{' '}</Text>
                                {plant.famille}
                            </Text>
                            <Text>
                                <Text style={styles.bold}>Genre:{' '}</Text>
                                {plant.genre}
                            </Text>
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
        </View>
    );
};

export default Info;
