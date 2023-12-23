import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import PlantNavBar from '../../navigation/PlantNavBar';
import styles from './styles';

const Utilisation = ({ route }) => {
    const { plantId } = route.params;
    const { originRoute } = route.params;
    const { symptomeId } = route.params;
    const { symptomeName } = route.params;
    const [plant, setPlant] = useState(null);

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
        return (
            <View>
                <Text>Loading...</Text>
            </View>
        );
    }

    const { utilisations } = plant;

    const utilisationsInterne = utilisations.filter(item => item.type === 'interne');
    const utilisationsExterne = utilisations.filter(item => item.type === 'externe');

    return (
        <View style={styles.background}>
            <PlantNavBar plantId={plantId} originRoute={originRoute} symptomeId={symptomeId} symptomeName={symptomeName} />
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
    );
};

export default Utilisation;
