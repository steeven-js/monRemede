import React, { useEffect } from 'react';
import { View, ScrollView, StyleSheet, ImageBackground, Dimensions, TouchableOpacity, Image, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSymptomes } from '../../store/fetchApi';

const Usages = ({ navigation }) => {
    const dispatch = useDispatch();
    const symtomesData = useSelector((state) => state.symptomes.data);

    useEffect(() => {
        dispatch(fetchSymptomes());
        // console.log('symtomesData', symtomesData);
    }, []);

    const renderCategoriesGrid = () => {
        if (!symtomesData) {
            return <Text>Loading...</Text>;
        }
        return (
            <View style={styles.gridContainer}>
                {symtomesData.map((category) => (
                    <TouchableOpacity
                        style={[styles.category, styles.spacing]}
                        key={category.id}
                        onPress={() => {
                            navigation.navigate('CategoryScreen', {
                                symptomeId: category.id,
                                symptomeName: category.name,
                            });
                        }}
                    >
                        <Image
                            source={require(`../assets/images/plante.jpg`)} // Remplacez par le chemin réel de votre image
                            style={{ width: '100%', height: '100%', borderRadius: 5 }}
                        />
                        <View style={styles.categoryInfoContainer}>
                            <Text style={styles.symptomeName}>{category.name}</Text>
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
                {symtomesData ? (
                    <ScrollView style={styles.container}>
                        {renderCategoriesGrid()}
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
