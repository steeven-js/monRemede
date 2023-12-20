import React, { useEffect } from 'react';
import { View, Text, ImageBackground, StyleSheet, ScrollView, Dimensions, TouchableOpacity, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSymptome } from '../../../redux/fetchApi';
import BackIcon from 'react-native-vector-icons/Ionicons';
import StarIcon from 'react-native-vector-icons/FontAwesome6';

const SymptomeDetail = ({ route, navigation }) => {
    const { symptomeId, symptomeName } = route.params;
    const dispatch = useDispatch();
    const symptomePlants = useSelector((state) => state.symptomes.symptomePlants);

    useEffect(() => {
        dispatch(fetchSymptome(symptomeId));
    }, [dispatch, symptomeId]);

    return (
        <ImageBackground
            source={require('../../assets/images/backgrounds/fond4.jpg')}
            style={styles.backgroundImage}
        >
            <LinearGradient
                colors={['#2e6a30', '#439a46']} // Dégradé de deux tons de vert foncé
                locations={[0, 0.65]} // Positions relatives des couleurs
                useAngle
                angle={180}
                style={styles.header}
            >
                <View style={styles.divAboveTabs}>
                    <BackIcon name="arrow-back" size={30} color="#fff" onPress={() => navigation.goBack()} />
                    <Text style={styles.divText}>{symptomeName}</Text>
                    <Text style={styles.divText}>{symptomePlants.plants_count}</Text>
                </View>
            </LinearGradient>

            <View style={styles.overlay}>

                {symptomePlants && symptomePlants.plants ? (
                    <ScrollView style={styles.container}>
                        <View style={styles.gridContainer}>
                            {symptomePlants.plants.map((plant) => (
                                <TouchableOpacity
                                    style={[styles.favorite, styles.spacing]}
                                    key={plant.id}
                                    onPress={() => {
                                        navigation.navigate('PlantScreen', {
                                            plantId: plant.id,
                                        });
                                    }}
                                >
                                    <Image
                                        source={require(`../../assets/images/plante/plante.jpg`)} // Remplacez par le chemin réel de votre image
                                        style={{ width: '100%', height: '100%', borderRadius: 5 }}
                                    />
                                    <View style={styles.favoriteInfoContainer}>
                                        <Text style={styles.favoriteName}>{plant.name}</Text>
                                    </View>
                                </TouchableOpacity>
                            ))}
                        </View>
                    </ScrollView>
                ) : (
                    <Text>Loading plants...</Text>
                )}

            </View>
        </ImageBackground>
    );
};

const { width } = Dimensions.get('window');
const numColumns = 2;
const columnWidth = width / numColumns;

const styles = StyleSheet.create({
    header: {
        backgroundColor: 'lightgreen',
    },
    divAboveTabs: {
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },

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
        color: 'white',
    },
    gridContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
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
        position: 'relative', // Position relative pour permettre le positionnement absolu du texte
    },
    favoriteInfoContainer: {
        position: 'absolute', // Position absolue par rapport au conteneur parent (TouchableOpacity)
        bottom: 0, // Aligner le bas du conteneur au bas du TouchableOpacity
        left: 0, // Aligner le côté gauche du conteneur au côté gauche du TouchableOpacity
        width: '100%', // Occuper toute la largeur du TouchableOpacity
        backgroundColor: 'rgba(0, 0, 0, 0.7)', // Fond sombre semi-transparent
        borderBottomLeftRadius: 5, // Rayon des coins pour arrondir le coin en bas à gauche
        borderBottomRightRadius: 5, // Rayon des coins pour arrondir le coin en bas à droite
        padding: 5, // Espace interne pour le texte
    },
    favoriteName: {
        color: 'white',
        textAlign: 'center',
        fontFamily: 'Dosis-Regular',
    },
    divText: {
        fontSize: 18,
        color: 'white',
        fontFamily: 'Dosis-Regular',
    },
});

export default SymptomeDetail;
