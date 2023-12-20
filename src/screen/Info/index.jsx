import { View, Text, ImageBackground, StyleSheet, ScrollView, Dimensions, TouchableOpacity, Image } from 'react-native';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPlant } from '../../../redux/fetchApi';

const Info = ({ route }) => {
    const { plantId } = route.params;
    const dispatch = useDispatch();

    // Fetch plant data on component mount
    useEffect(() => {
        dispatch(fetchPlant(plantId));
    }, [dispatch, plantId]);

    // Retrieve the plant data from the Redux store
    const plant = useSelector((state) => state.plants.selectedPlant);

    if (!plant) {
        // If the data is not available yet, you can render a loading indicator or return null
        return (
            <View>
                <Text>Loading...</Text>
            </View>
        );
    }

    return (
        <ImageBackground
            source={require('../../assets/images/backgrounds/fond4.jpg')}
            style={styles.backgroundImage}
        >
            <View style={styles.overlay}>
                <View style={styles.container}>
                    <View style={styles.content}>

                        <View style={styles.section}>
                            <Text style={styles.title}>{plant.name}</Text>
                        </View>

                        <View style={[styles.section, styles.borderBottom]}>
                            <Text>
                                <Text style={styles.bold}>
                                    N.Scient:{' '}
                                </Text>
                                {plant.nscient}</Text>
                            <Text>
                                <Text style={styles.bold}>
                                    Famille:{' '}
                                </Text>
                                {plant.famille}</Text>
                            <Text>
                                <Text style={styles.bold}>
                                    Genre:{' '}
                                </Text>
                                {plant.genre}</Text>
                        </View>

                        <View style={[styles.section, styles.borderBottom]}>
                            <Text style={styles.soustitre}>Description</Text>
                            <Text>{plant.description}</Text>
                        </View>

                        <View style={[styles.section, styles.borderBottom]}>
                            <Text style={styles.soustitre}>Habitat</Text>
                            <Text>{plant.habitat}</Text>
                        </View>

                    </View>
                </View>
            </View>
        </ImageBackground>
    );
}

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
        backgroundColor: '#f1e3c6',
        borderRadius: 10,
        borderColor: 'lightblue',
        borderWidth: 3,
        margin: 20,
        marginTop: 30,
    },
    content: {
        paddingHorizontal: 10,
    },
    section: {
        paddingHorizontal: 10,
    },
    borderBottom: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        paddingVertical: 10,
    },
    title: {
        fontFamily: 'Dosis-Medium',
        color: 'black',
        fontSize: 15,
        textAlign: 'center',
        marginTop: 10,
    },
    soustitre: {
        fontFamily: 'Dosis-Medium',
        color: 'black',
        textDecorationLine: 'underline',
        textAlign: 'center',
        marginBottom: 10,
    },
    bold: {
        fontFamily: 'Dosis-Medium',
        color: 'black',
    },
});

export default Info;