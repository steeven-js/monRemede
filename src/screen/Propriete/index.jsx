import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import PlantNavBar from '../../navigation/PlantNavBar';
import useFetchPlant from '../../../hook/useFetchPlant';
import styles from './styles';

const Propriete = ({ route }) => {
    const { plantId, originRoute, symptomeId, symptomeName } = route.params;
    const { data, isLoading, error } = useFetchPlant(plantId);

    if (!data) {
        return (
            <View>
                <ActivityIndicator size="large" color="#00ff00" />
            </View>
        );
    }

    const { proprietes } = data;

    return (
        <View style={styles.background}>
            {isLoading ? (
                <ActivityIndicator size="large" color="#00ff00" />
            ) : error ? (
                <Text>Something went wrong</Text>
            ) : (
                <>
                    <PlantNavBar data={data} plantId={plantId} originRoute={originRoute} symptomeId={symptomeId} symptomeName={symptomeName} />
                    <View style={styles.container}>
                        <View style={styles.content}>
                            <View style={styles.section}>
                                <Text style={styles.soustitre}>Propriétés</Text>
                            </View>
                            {proprietes && proprietes.length > 0 ? (
                                proprietes.map((proprietesItem) => (
                                    <View key={proprietesItem.id} style={styles.text}>
                                        <Text>{'.'} {proprietesItem.value}</Text>
                                    </View>
                                ))
                            ) : (
                                <Text>No properties available</Text>
                            )}
                        </View>
                    </View>
                </>
            )}
        </View>
    );
};

export default Propriete;
