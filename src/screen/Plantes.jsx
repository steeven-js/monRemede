import React, { useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet, ImageBackground, Dimensions, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPlants } from '../../store/fetchApi';

const Plantes = ({ navigation }) => {
    const dispatch = useDispatch();
    const plantsData = useSelector((state) => state.plants.data);

    useEffect(() => {
        dispatch(fetchPlants());
    }, [dispatch]);

    const renderPlantsGrid = () => {
        return (
            <View style={styles.gridContainer}>
                {plantsData.map((plant) => (
                    <TouchableOpacity
                        style={[styles.plant, styles.spacing]}
                        key={plant.id}
                        onPress={() => {
                            navigation.navigate('PlantScreen', {
                                plantId: plant.id,
                                plantName: plant.name,
                            });
                        }}
                    >
                        <Text style={styles.plantName}>{plant.name}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        );
    };

    return (
        <ImageBackground
            source={require('../images/bois.jpg')}
            style={styles.backgroundImage}
        >
            <View style={styles.overlay}>
                {plantsData ? (
                    <ScrollView style={styles.container}>
                        {renderPlantsGrid()}
                    </ScrollView>
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
        backgroundColor: 'rgba(0, 0, 0, 0.4)', // couleur noire semi-transparente
    },
    container: {
        backgroundColor: 'transparent',
        padding: 10,
    },
    spacing: {
        padding: 10,
        color: 'white', // Couleur du texte sur l'image assombrie
    },
    gridContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        paddingl: 10,
    },
    plant: {
        width: columnWidth - 20, // -20 pour prendre en compte la marge entre les éléments
        height: columnWidth - 20, // Hauteur égale à la largeur pour obtenir un carré
        borderWidth: 1, // Épaisseur de la bordure
        borderColor: 'rgba(255, 255, 255, 0.6)', // Couleur de la bordure (blanc semi-transparent)
        borderRadius: 5, // Rayon des coins pour arrondir la bordure
        marginBottom: 10, // Marge en bas pour séparer les plantes
        justifyContent: 'center', // Centrer le contenu à l'intérieur du carré
        alignItems: 'center',
    },
    plantName: {
        color: 'white',
    },
});

export default Plantes;
