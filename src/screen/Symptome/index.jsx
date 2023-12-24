import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, FlatList, TouchableOpacity, Text, ActivityIndicator } from 'react-native';
import { setFetchedData, selectFetchedData } from '../../../redux/reducer/symptomeSlice';
import { SafeAreaView } from 'react-native-safe-area-context';
import axios from 'axios';
import styles from './styles';

const Usages = ({ navigation }) => {
    const dispatch = useDispatch();
    const symptomesData = useSelector(selectFetchedData);

    const fetchSymptomes = async () => {
        try {
            const response = await axios.get('http://apimonremede.jsprod.fr/api/symptomes');
            dispatch(setFetchedData(response.data));
        } catch (error) {
            console.error('Error fetching symptomes:', error);
        }
    };

    useEffect(() => {
        fetchSymptomes();
    }, [dispatch]);

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
        <SafeAreaView style={styles.background}>
            <View style={styles.overlay}>
                {symptomesData ? (
                    <FlatList
                        data={symptomesData}
                        renderItem={renderSymptomeItem}
                        keyExtractor={(item) => item.id.toString()}
                        onRefresh={fetchSymptomes}
                        refreshing={!symptomesData}
                        onEndReachedThreshold={0.5}
                        onEndReached={() => {
                            console.log('End reached');
                        }}
                    />
                ) : (
                    <ActivityIndicator size="large" color="#00ff00" />
                )}
            </View>
        </SafeAreaView>
    );
};

export default Usages;
