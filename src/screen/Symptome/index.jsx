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
        <ImageBackground
            source={require('../../assets/images/backgrounds/fond4.jpg')}
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
        </ImageBackground>
    );
};

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.6)', // semi-transparent dark color
        padding: 10,
    },
    symptomeItem: {
        marginBottom: 10,
        borderRadius: 5,
        overflow: 'hidden',
        backgroundColor: 'rgba(30, 30, 30, 0.8)', // dark background color
        padding: 10,
    },
    symptomeName: {
        color: 'white',
        textAlign: 'center',
        fontFamily: 'Dosis-Regular',
    },
});

export default Usages;
