import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import PlantNavBar from '../../navigation/PlantNavBar';
import styles from './styles';

const Info = ({ route }) => {
    const { plantId } = route.params;
    const { originRoute } = route.params;
    const { symptomeId } = route.params;
    const { symptomeName } = route.params;
    const [plant, setPlant] = useState(null);
    console.log('route:', route.params?.originRoute)

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
            <PlantNavBar plantId={plantId} originRoute={originRoute} symptomeId={symptomeId} symptomeName={symptomeName} />
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
    );
};

export default Info;
