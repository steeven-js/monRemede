import React, { useState, useEffect } from 'react';
import {
    View,
    FlatList,
    StyleSheet,
    ImageBackground,
    Dimensions,
    TouchableOpacity,
    Text,
} from 'react-native';
import styles from './styles';

const Usages = ({ navigation }) => {
    const [symptomesData, setSymptomesData] = useState(null);

    useEffect(() => {
        const fetchSymptomes = async () => {
            try {
                const response = await fetch('http://apimonremede.jsprod.fr/api/symptomes');
                const data = await response.json();
                setSymptomesData(data);
            } catch (error) {
                console.error('Error fetching symptomes:', error);
            }
        };

        fetchSymptomes();
    }, []);

    const renderSymptomeItem = ({ item }) => (
        <TouchableOpacity
            style={styles.symptomeItem}
            onPress={() => {
                navigation.navigate('SymptomeDetail', {
                    symptomeId: item.id,
                    symptomeName: item.name,
                });
            }}
        >
            <Text style={styles.symptomeName}>{item.name}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.background}>
            <View style={styles.overlay}>
                {symptomesData ? (
                    <FlatList
                        data={symptomesData}
                        renderItem={renderSymptomeItem}
                        keyExtractor={(item) => item.id.toString()}
                    />
                ) : (
                    <Text>Loading...</Text>
                )}
            </View>
        </View>
    );
};

export default Usages;
