import React from 'react';
import { View, Text, ImageBackground, StyleSheet, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';

const Favoris = () => {
    const favorites = useSelector((state) => state.favorites);

    const renderFavoritesGrid = () => {
        return (
            <View style={styles.gridContainer}>
                {favorites.map((item) => (
                    <TouchableOpacity
                        style={[styles.favorite, styles.spacing]}
                        key={item.plantId}
                        onPress={() => {
                            // Add navigation logic if needed
                            console.log('Navigate to plant details or perform other action');
                        }}
                    >
                        <Text style={styles.favoriteName}>{item.plantName}</Text>
                        {/* Add more details if needed */}
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
                <ScrollView style={styles.container}>
                    {renderFavoritesGrid()}
                </ScrollView>
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
    favorite: {
        width: columnWidth - 20, // -20 pour prendre en compte la marge entre les éléments
        height: columnWidth - 20, // Hauteur égale à la largeur pour obtenir un carré
        borderWidth: 1, // Épaisseur de la bordure
        borderColor: 'rgba(255, 255, 255, 0.6)', // Couleur de la bordure (blanc semi-transparent)
        borderRadius: 5, // Rayon des coins pour arrondir la bordure
        marginBottom: 10, // Marge en bas pour séparer les favoris
        justifyContent: 'center', // Centrer le contenu à l'intérieur du carré
        alignItems: 'center',
    },
    favoriteName: {
        color: 'white',
        textAlign: 'center', // Centrer le texte à l'intérieur du carré
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 10,
    },
});

export default Favoris;
