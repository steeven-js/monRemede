import React, { useEffect } from 'react';
import { View, ScrollView, StyleSheet, ImageBackground, Dimensions, TouchableOpacity, Image, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPlants } from '../../redux/fetchApi';

const Plantes = ({ navigation }) => {
    const dispatch = useDispatch();
    const plantsData = useSelector((state) => state.plants.data);

    // useEffect(() => {
    //     dispatch(fetchPlants());
    // }, [dispatch]);

    useEffect(() => {
        dispatch(fetchPlants());
        // console.log('Chargement Plante')
    }, []);

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
                        <Image
                            source={require(`../assets/images/plante.jpg`)} // Remplacez par le chemin réel de votre image
                            style={{ width: '100%', height: '100%', borderRadius: 5 }}
                        />
                        <View style={styles.plantInfoContainer}>
                            <Text style={styles.plantName}>{plant.name}</Text>
                        </View>
                    </TouchableOpacity>
                ))}
            </View>
        );
    };

    return (
        <ImageBackground
            source={require('../assets/images/fond4.jpg')}
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
        color: 'white', // Couleur du texte sur l'image assombrie
    },
    gridContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
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
        position: 'relative', // Position relative pour permettre le positionnement absolu du texte
    },
    plantInfoContainer: {
        position: 'absolute', // Position absolue par rapport au conteneur parent (TouchableOpacity)
        bottom: 0, // Aligner le bas du conteneur au bas du TouchableOpacity
        left: 0, // Aligner le côté gauche du conteneur au côté gauche du TouchableOpacity
        width: '100%', // Occuper toute la largeur du TouchableOpacity
        backgroundColor: 'rgba(0, 0, 0, 0.7)', // Fond sombre semi-transparent
        borderBottomLeftRadius: 5, // Rayon des coins pour arrondir le coin en bas à gauche
        borderBottomRightRadius: 5, // Rayon des coins pour arrondir le coin en bas à droite
        padding: 5, // Espace interne pour le texte
    },
    plantName: {
        color: 'white',
        textAlign: 'center',
        fontFamily: 'Dosis-Regular',
    },
});

export default Plantes;
