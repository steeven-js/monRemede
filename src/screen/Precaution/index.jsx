import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { fetchPlant } from '../../../redux/fetchApi';
import styles from './styles';

const Precaution = ({ route }) => {
    const { plantId } = route.params;
    const [plant, setPlant] = useState(null);

    // Fetch plant data on component mount
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://apimonremede.jsprod.fr/api/plants/${plantId}`);
                const data = await response.json();
                setPlant(data);
            } catch (error) {
                console.error('Error fetching plant:', error);
            }
        };

        if (!plant) {
            fetchData();
        }
    }, [plant, plantId]);

    if (!plant) {
        // If the data is not available yet, you can render a loading indicator or return null
        return (
            <View>
                <Text>Loading...</Text>
            </View>
        );
    }

    // Extract the relevant information from the plant data
    const { precautions } = plant;

    return (
        <View style={styles.backgroundImage}>
            <View style={styles.overlay}>
                <View style={styles.container}>
                    <View style={styles.content}>
                        <View style={styles.section}>
                            <Text style={styles.title}>Précautions</Text>
                            {precautions.map((precautionItem) => (
                                <View key={precautionItem.id} style={styles.text}>
                                    <Text>{'.'} {precautionItem.value}</Text>
                                </View>
                            ))}
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default Precaution;
