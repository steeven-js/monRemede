import { View, FlatList, TouchableOpacity, Text, ActivityIndicator, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';
import React from 'react';

import { icons } from '../../constants';

import styles from './styles';

const Symptomes = ({ navigation }) => {
    const symptomesData = useSelector((state) => state.symptomes.data);

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
            <View style={styles.rowContainer}>
                <View style={styles.left}>
                    <Image source={icons.soin} style={styles.icon} />
                    <Text style={styles.symptomeName}>{item.name}</Text>
                </View>
                <View style={styles.right}>
                    <Image source={icons.feuille} style={styles.icon} />
                </View>
            </View>
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
                        refreshing={symptomesData}
                        onEndReachedThreshold={0.5}
                        onEndReached={() => {
                            console.log('End reached');
                        }}
                        showsVerticalScrollIndicator={false}
                    />
                ) : (
                    <ActivityIndicator size="large" color="#00ff00" />
                )}
            </View>
        </SafeAreaView>
    );
};

export default Symptomes;
