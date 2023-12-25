import { View, FlatList, TouchableOpacity, Text, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSymptomes } from '../../../redux/reducer/symptomeSlice';
import React, { useEffect } from 'react';

import styles from './styles';

const Symptomes = () => {
    const dispatch = useDispatch();
    const symptomesData = useSelector((state) => state.symptomes.data);

    useEffect(() => {
        dispatch(fetchSymptomes());
    }, [dispatch]);

    // console.log('symptomesData', symptomesData);

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

export default Symptomes;
