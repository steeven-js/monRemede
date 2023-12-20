import React, { useEffect } from 'react';
import { View, StyleSheet, ImageBackground, Dimensions, TouchableOpacity, Image, Text, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPlants } from '../../redux/fetchApi';

const Plantes = ({ navigation }) => {
    const dispatch = useDispatch();
    const plantsData = useSelector((state) => state.plants.data);

    useEffect(() => {
        dispatch(fetchPlants());
    }, []);

    const renderPlantItem = ({ item }) => (
        <TouchableOpacity
            style={[styles.plant, styles.spacing]}
            onPress={() => {
                navigation.navigate('PlantScreen', {
                    plantId: item.id,
                    plantName: item.name,
                });
            }}
        >
            <Image
                source={require(`../assets/images/plante/plante.jpg`)} // Remplacez par le chemin réel de votre image
                style={{ width: '100%', height: '100%', borderRadius: 5 }}
            />
            <View style={styles.plantInfoContainer}>
                <Text style={styles.plantName}>{item.name}</Text>
            </View>
        </TouchableOpacity>
    );

    return (
        <ImageBackground
            source={require('../assets/images/backgrounds/fond4.jpg')}
            style={styles.backgroundImage}
        >
            <View style={styles.overlay}>
                {plantsData ? (
                    <FlatList
                        data={plantsData}
                        renderItem={renderPlantItem}
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
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
    },
    container: {
        backgroundColor: 'transparent',
    },
    spacing: {
        color: 'white',
    },
    plant: {
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
    plantInfoContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        padding: 5,
    },
    plantName: {
        color: 'white',
        textAlign: 'center',
        fontFamily: 'Dosis-Regular',
    },
});

export default Plantes;
