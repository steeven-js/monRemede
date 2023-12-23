import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import PlantNavBar from '../../navigation/PlantNavBar';
import styles from './styles';

const Propriete = ({ route }) => {
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

    // Extract the relevant information from the plant data
    const { proprietes } = plant;

    return (
        <View style={styles.background}>
            <PlantNavBar plantId={plantId} />
            <View style={styles.container}>
                <View style={styles.content}>
                    <View style={styles.section}>
                        <Text style={styles.soustitre}>Propriétés</Text>
                    </View>
                    {proprietes.map((proprietesItem) => (
                        <View key={proprietesItem.id} style={styles.text}>
                            <Text>{'.'} {proprietesItem.value}</Text>
                        </View>
                    ))}
                </View>
            </View>
        </View>
    );
};

export default Propriete;
