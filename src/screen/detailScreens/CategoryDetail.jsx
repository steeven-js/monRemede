import React, { useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategory } from '../../../store/fetchApi';
import BackIcon from 'react-native-vector-icons/Ionicons';
import StarIcon from 'react-native-vector-icons/FontAwesome6';

const CategoryDetail = ({ route, navigation }) => {
    const { categoryId, categoryName } = route.params;
    const dispatch = useDispatch();
    const categoryPlants = useSelector((state) => state.categories.categoryPlants);

    useEffect(() => {
        dispatch(fetchCategory(categoryId));
    }, [dispatch, categoryId]);

    return (
        <View>
            <View style={styles.divAboveTabs}>
                <BackIcon name="arrow-back" size={30} color="#900" onPress={() => navigation.goBack()} />
                <Text>{categoryName}</Text>
                <Text>{categoryPlants.plants_count}</Text>
            </View>
            {categoryPlants && categoryPlants.plants ? (
                <ScrollView>
                    {categoryPlants.plants.map((plant) => (
                        <Text
                            key={plant.id}
                            onPress={() => {
                                // console.log('Navigating to CategoryDetail with category ID:', category.id);
                                navigation.navigate('PlantScreen', {
                                    plantId: plant.id,
                                });
                            }}
                        >{plant.name}</Text>
                    ))}
                </ScrollView>
            ) : (
                <Text>Loading plants...</Text>
            )}
        </View>
    );
};

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
});

export default CategoryDetail;
