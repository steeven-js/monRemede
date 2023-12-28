import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import PlantNavBar from '../../navigation/PlantNavBar';
import useFetchPlant from '../../../hook/useFetchPlant';
import styles from './styles';

const Precaution = ({ route }) => {
    const { plantId, originRoute, symptomeId, symptomeName } = route.params;
    const { data, isLoading, error } = useFetchPlant(plantId);

    if (!data) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#00ff00" />
            </View>
        );
    }

    const { precautions } = data;

    return (
        <View style={styles.background}>
            {isLoading ? (
                <View style={styles.loadingContainer}>
                    <ActivityIndicator size="large" color="#00ff00" />
                </View>
            ) : error ? (
                <Text>Something went wrong</Text>
            ) : (
                <>
                    <PlantNavBar data={data} plantId={plantId} originRoute={originRoute} symptomeId={symptomeId} symptomeName={symptomeName} />
                    <View style={styles.container}>
                        <View style={styles.content}>
                            <View style={styles.section}>
                                <Text style={styles.title}>Précautions</Text>
                                {precautions && precautions.length > 0 ? (
                                    precautions.map((precautionItem) => (
                                        <View key={precautionItem.id} style={styles.text}>
                                            <Text>{'.'} {precautionItem.value}</Text>
                                        </View>
                                    ))
                                ) : (
                                    <Text>No precautions available</Text>
                                )}
                            </View>
                        </View>
                    </View>
                </>
            )}
        </View>
    );
};

export default Precaution;
