import React, { useEffect } from 'react';
import { View, Text, ImageBackground, StyleSheet, ScrollView, Dimensions, TouchableOpacity, Image, Button } from 'react-native';
import { useSelector } from 'react-redux';
import firestore from '@react-native-firebase/firestore';

const Favoris = ({navigation}) => {
    const favorites = useSelector((state) => state.favorites);

    // const test = () => {
    //     console.log("Button clicked!");
    // };

    // const renderFavoritesGrid = () => {
    //     return (
    //         <View style={styles.gridContainer}>
    //             {favorites.map((item) => (
    //                 <TouchableOpacity
    //                     style={[styles.favorite, styles.spacing]}
    //                     key={item.plantId}
    //                     onPress={() => {
    //                         // Ajoutez la logique de navigation si nécessaire
    //                         console.log('Naviguer vers les détails de la plante ou effectuer une autre action');
    //                     }}
    //                 >
    //                     <Image
    //                         source={require(`../assets/images/plante.jpg`)} // Remplacez par le chemin réel de votre image
    //                         style={{ width: '100%', height: '100%', borderRadius: 5 }}
    //                     />
    //                     <View style={styles.favoriteInfoContainer}>
    //                         <Text style={styles.favoriteName}>{item.plantName}</Text>
    //                     </View>
    //                 </TouchableOpacity>
    //             ))}
    //         </View>
    //     );
    // };

    useEffect(() => {
        const subscriber = firestore()
            .collection('Users').limit(10)
            .onSnapshot(documentSnapshot => {
                // console.log('User data: ', documentSnapshot);
            });

        // Stop listening for updates when no longer required
        return () => subscriber();
    }, []);

    return (
        <ImageBackground
            source={require('../assets/images/fond4.jpg')}
            style={styles.backgroundImage}
        >
            <View style={styles.overlay}>
                <ScrollView style={styles.container}>
                    {favorites.length > 0 ? (
                        renderFavoritesGrid()
                    ) : (
                        <View>
                            <Text>No favorites yet.</Text>
                            <Button title="Se connecter" onPress={() => { navigation.navigate('LoginScreen') }} />
                        </View>
                    )}
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
        color: 'white',
    },
    gridContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    favorite: {
        width: columnWidth - 20,
        height: columnWidth - 20,
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.6)',
        borderRadius: 5,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
    },
    favoriteInfoContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        padding: 5,
    },
    favoriteName: {
        color: 'white',
        textAlign: 'center',
        fontFamily: 'Dosis-Regular',
    },
});

export default Favoris;
