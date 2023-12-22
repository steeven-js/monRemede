import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    ImageBackground,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    Image,
    FlatList,
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

    const renderItem = ({ item }) => (
        <TouchableOpacity
            style={[styles.favorite, styles.spacing]}
            onPress={() => {
                navigation.navigate('PlantDetail', {
                    plantId: item.id,
                    symptomeId: symptomeId,
                    symptomeName: symptomeName,
                });
            }}
        >
            <Image
                source={require('../../assets/images/plante/plante.jpg')}
                style={styles.plantImage}
            />
            <View style={styles.favoriteInfoContainer}>
                <Text style={styles.favoriteName}>{item.name}</Text>
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={styles.background}>
            <LinearGradient
                colors={['#2e6a30', '#439a46']}
                locations={[0, 0.65]}
                useAngle
                angle={180}
                style={styles.header}
            >
                <View style={styles.TopNavBar}>
                    <BackIcon
                        name="arrow-back"
                        size={30}
                        color="#fff"
                        onPress={() => navigation.goBack()}
                    />
                    <Text style={styles.textTopNavBar}>{symptomeName}</Text>
                    <Text style={styles.textTopNavBar}>
                        {symptomePlants?.plants_count}
                    </Text>
                </View>
            </LinearGradient>

            <View style={styles.overlay}>
                {symptomePlants && symptomePlants.plants ? (
                    <FlatList
                        data={symptomePlants.plants}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={renderItem}
                        numColumns={2}
                    />
                ) : (
                    <Text>Loading plants...</Text>
                )}
            </View>
        </View>
    );
};

export default SymptomeDetail;
