import React from 'react';
import {
    View,
    FlatList,
    StyleSheet,
    ImageBackground,
    Dimensions,
    TouchableOpacity,
    Image,
    Text,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSymptomes } from '../../redux/fetchApi';

const Usages = ({ navigation }) => {
    const dispatch = useDispatch();
    const symtomesData = useSelector((state) => state.symptomes.data);

    // Check if data is already available, if not, fetch it
    if (!symtomesData) {
        dispatch(fetchSymptomes());
    }

    const renderCategoriesGrid = ({ item }) => (
        <TouchableOpacity
            style={[styles.category, styles.spacing]}
            onPress={() => {
                navigation.navigate('SymptomeDetail', {
                    symptomeId: item.id,
                    symptomeName: item.name,
                });
            }}
        >
            <Image
                source={require(`../assets/images/plante/plante.jpg`)} // Replace with the actual path of your image
                style={{ width: '100%', height: '100%', borderRadius: 5 }}
            />
            <View style={styles.categoryInfoContainer}>
                <Text style={styles.symptomeName}>{item.name}</Text>
            </View>
        </TouchableOpacity>
    );

    return (
        <ImageBackground
            source={require('../assets/images/backgrounds/fond4.jpg')}
            style={styles.backgroundImage}
        >
            <View style={styles.overlay}>
                {symtomesData ? (
                    <FlatList
                        data={symtomesData}
                        renderItem={renderCategoriesGrid}
                        keyExtractor={(item) => item.id.toString()}
                        numColumns={2}
                        contentContainerStyle={styles.container}
                    />
                ) : (
                    <Text>Loading...</Text>
                )}
            </View>
        </ImageBackground>
    );
};

const { width } = Dimensions.get('window');
const numColumns = 2;
const columnWidth = width / numColumns;

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.4)', // semi-transparent black color
    },
    container: {
        backgroundColor: 'transparent',
    },
    spacing: {
        color: 'white', // Text color on darkened image
    },
    gridContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    category: {
        width: columnWidth - 20,
        height: columnWidth - 20,
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.6)',
        borderRadius: 5,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        margin: 10,
    },
    categoryInfoContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        padding: 5,
    },
    symptomeName: {
        color: 'white',
        textAlign: 'center',
        fontFamily: 'Dosis-Regular',
    },
});

export default Usages;
