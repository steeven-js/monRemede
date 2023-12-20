import React, { useEffect, useState } from 'react';
import {
    View,
    StyleSheet,
    ImageBackground,
    Dimensions,
    TouchableOpacity,
    Image,
    Text,
    FlatList,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSymptomes } from '../../redux/fetchApi';

const Usages = ({ navigation }) => {
    const dispatch = useDispatch();
    const symptomesData = useSelector((state) => state.symptomes.data);
    const [isLoading, setIsLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        // Chargement initial des symptômes
        loadSymptomes();
    }, []);

    const loadSymptomes = () => {
        if (isLoading) return;

        setIsLoading(true);
        dispatch(fetchSymptomes(currentPage))
            .then(() => {
                setCurrentPage(currentPage + 1);
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    const handleItemClick = (item) => {
        navigation.navigate('SymptomeDetail', {
            symptomeId: item.id,
            symptomeName: item.name,
        });
    };

    const renderCategoryItem = ({ item }) => (
        <TouchableOpacity
            style={[styles.category, styles.spacing]}
            onPress={() => handleItemClick(item)}
        >
            <Image
                source={require(`../assets/images/plante/plante.jpg`)} // Remplacez par le chemin réel de votre image
                style={{ width: '100%', height: '100%', borderRadius: 5 }}
            />
            <View style={styles.categoryInfoContainer}>
                <Text style={styles.symptomeName}>{item.name}</Text>
            </View>
        </TouchableOpacity>
    );

    const renderFooter = () => {
        if (!isLoading) return null;

        return <Text>Loading...</Text>;
    };

    const keyExtractor = (item) => item.id.toString();

    return (
        <ImageBackground
            source={require('../assets/images/backgrounds/fond4.jpg')}
            style={styles.backgroundImage}
        >
            <View style={styles.overlay}>
                {symptomesData ? (
                    <FlatList
                        data={symptomesData}
                        renderItem={renderCategoryItem}
                        keyExtractor={keyExtractor}
                        numColumns={2}
                        onEndReachedThreshold={0.1}
                        onEndReached={loadSymptomes}
                        ListFooterComponent={renderFooter}
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
        backgroundColor: 'rgba(0, 0, 0, 0.4)', // couleur noire semi-transparente
    },
    container: {
        backgroundColor: 'transparent',
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
