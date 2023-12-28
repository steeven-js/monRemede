import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import PlantNavBar from '../../navigation/PlantNavBar';
import useFetchPlant from '../../../hook/useFetchPlant';
import styles from './styles';

const Utilisation = ({ route }) => {
    const { plantId, originRoute, symptomeId, symptomeName } = route.params;
    const { data, isLoading, error } = useFetchPlant(plantId);

    if (!data) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#00ff00" />
            </View>
        );
    }

    return (
        <View style={styles.background}>
            {isLoading ? (
                <View style={styles.loadingContainer}>
                    <ActivityIndicator size="large" color="#00ff00" />
                </View>
            ) : error ? (
                <Text>Something went wrong</Text>
            ) : !data || !data.utilisations ? (
                <View>
                    <Text>Utilisations data is missing or undefined.</Text>
                </View>
            ) : (
                <>
                    <PlantNavBar data={data} plantId={plantId} originRoute={originRoute} symptomeId={symptomeId} symptomeName={symptomeName} />
                    <View style={styles.container}>
                        <View style={styles.content}>
                            <View style={styles.section}>
                                <Text style={styles.title}>Utilisations</Text>
                            </View>
                            <View style={[styles.section, styles.borderBottom]}>
                                <Text style={styles.soustitre}>Usage Interne</Text>
                                {data.utilisations.filter(item => item.type === 'interne').map((utilisationItem) => (
                                    <Text key={utilisationItem.id} style={styles.text}>
                                        {utilisationItem.value}
                                    </Text>
                                ))}
                            </View>
                            <View style={styles.section}>
                                <Text style={styles.soustitre}>Usage Externe</Text>
                                {data.utilisations.filter(item => item.type === 'externe').map((utilisationItem) => (
                                    <Text key={utilisationItem.id} style={styles.text}>
                                        {utilisationItem.value}
                                    </Text>
                                ))}
                            </View>
                        </View>
                    </View>
                </>
            )}
        </View>
    );
};

export default Utilisation;
