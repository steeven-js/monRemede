import React from 'react';
import { View, Text, TouchableOpacity, Image, FlatList, ActivityIndicator } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import BackIcon from 'react-native-vector-icons/Ionicons';
import useFetchSymptom from '../../../hook/useFetchSymptom';
import styles from './styles';

const SymptomeDetail = ({ route, navigation }) => {
    const { symptomeId, symptomeName } = route.params;
    const { data: symptomePlants, isLoading, error, refetch } = useFetchSymptom(symptomeId);

    const renderItem = ({ item }) => (
        <TouchableOpacity
            style={[styles.favorite, styles.spacing]}
            onPress={() => {
                navigation.navigate('Info', {
                    plantId: item.id,
                    symptomeId: symptomeId,
                    symptomeName: symptomeName,
                    originRoute: 'SymptomeDetail',
                });
            }}
        >
            <Image
                source={require('../../assets/images/plante/no-image.png')}
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
                {isLoading ? (
                    <View style={styles.loadingContainer}>
                        <ActivityIndicator size="large" color="#00ff00" />
                    </View>
                ) : error ? (
                    <Text>Error loading plants. Please try again.</Text>
                ) : symptomePlants && symptomePlants.plants ? (
                    <FlatList
                        data={symptomePlants.plants}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={renderItem}
                        numColumns={2}
                        onRefresh={refetch}
                        refreshing={isLoading}
                    />
                ) : (
                    <Text>No plants available.</Text>
                )}
            </View>
        </View>
    );
};

export default SymptomeDetail;
