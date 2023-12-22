import React from 'react';
import {
    View,
    FlatList,
    StyleSheet,
    ImageBackground,
    Dimensions,
    TouchableOpacity,
    Text,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSymptomes } from '../../../redux/fetchApi';
import styles from './styles';

const Usages = ({ navigation }) => {
    const dispatch = useDispatch();
    const symptomesData = useSelector((state) => state.symptomes.data);

    // Check if data is already available; if not, fetch it
    if (!symptomesData) {
        dispatch(fetchSymptomes());
    }

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
        <View
            style={styles.backgroundImage}
        >
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
