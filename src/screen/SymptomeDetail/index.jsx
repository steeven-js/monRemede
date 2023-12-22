import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    ImageBackground,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    Image,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import BackIcon from 'react-native-vector-icons/Ionicons';
import styles from './styles';

const SymptomeDetail = ({ route, navigation }) => {
    const { symptomeId, symptomeName } = route.params;
    const [symptomePlants, setSymptomePlants] = useState(null);

    // Check if data is already available, if not, fetch it
    useEffect(() => {
        const fetchSymptome = async () => {
            try {
                const response = await fetch(`http://apimonremede.jsprod.fr/api/symptomes/${symptomeId}`);
                const data = await response.json();
                setSymptomePlants(data);
            } catch (error) {
                console.error('Error fetching symptome:', error);
            }
        };

        fetchSymptome();
    }, [symptomeId]); // Dependency array includes symptomeId to refetch data when it changes

    return (
        <View style={styles.backgroundImage}>
            <LinearGradient
                colors={['#2e6a30', '#439a46']}
                locations={[0, 0.65]}
                useAngle
                angle={180}
                style={styles.header}
            >
                <View style={styles.divAboveTabs}>
                    <BackIcon
                        name="arrow-back"
                        size={30}
                        color="#fff"
                        onPress={() => navigation.goBack()}
                    />
                    <Text style={styles.divText}>{symptomeName}</Text>
                    <Text style={styles.divText}>
                        {symptomePlants?.plants_count}
                    </Text>
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
        </View>
    );
};

export default SymptomeDetail;
