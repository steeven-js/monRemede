import React, { useEffect } from 'react';
import { View, Text, ScrollView, ImageBackground, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from '../../store/fetchApi';

const Usages = ({ navigation }) => {
    const dispatch = useDispatch();
    const categoriesData = useSelector((state) => state.categories.data);

    useEffect(() => {
        // console.log('Fetching categories...');
        dispatch(fetchCategories());
    }, [dispatch]);

    return (
        <ImageBackground
            source={require('../images/bois.jpg')}
            style={styles.backgroundImage}
        >
            <View style={styles.overlay}>
                <ScrollView style={styles.container}>
                    {categoriesData ? (
                        categoriesData.map((category) => (
                            <Text
                                style={[styles.category, styles.spacing]}
                                key={category.id}
                                onPress={() => {
                                    navigation.navigate('CategoryScreen', {
                                        categoryId: category.id,
                                        categoryName: category.name,
                                    });
                                }}
                            >
                                {category.name}
                            </Text>
                        ))
                    ) : (
                        <Text>Loading...</Text>
                    )}
                </ScrollView>
            </View>
        </ImageBackground>
    );
};

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
        paddingTop: 10,
    },
    spacing: {
        padding: 10,
        color: 'white', // Couleur du texte sur l'image assombrie
    },
    category: {
        borderWidth: 1, // Épaisseur de la bordure
        borderColor: 'rgba(255, 255, 255, 0.6)', // Couleur de la bordure (blanc semi-transparent)
        borderRadius: 5, // Rayon des coins pour arrondir la bordure
        marginBottom: 10, // Marge en bas pour séparer les catégories
    },
});

export default Usages;
