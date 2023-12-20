import React, { useEffect } from 'react';
import { View, Text, ImageBackground, StyleSheet, ScrollView, Dimensions, TouchableOpacity, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSymptome } from '../../../redux/fetchApi';
import BackIcon from 'react-native-vector-icons/Ionicons';
import styles from './styles';

const SymptomeDetail = ({ route, navigation }) => {
    const { symptomeId, symptomeName } = route.params;
    const dispatch = useDispatch();
    const symptomePlants = useSelector((state) => state.symptomes.symptomePlants);

    // Check if data is already available, if not, fetch it
    useEffect(() => {
        dispatch(fetchSymptome(symptomeId));
    }, []);

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
                    <Text style={styles.divText}>{symptomePlants?.plants_count}</Text>
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
                                        source={require('../../assets/images/plante/plante.jpg')}
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

export default SymptomeDetail;
