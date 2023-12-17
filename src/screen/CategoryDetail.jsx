import React, { useEffect } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategory } from '../../store/fetchApi/FetchCategory';

const CategoryDetail = ({ route, navigation }) => {
    const { categoryId, categoryName } = route.params;
    const dispatch = useDispatch();
    const categoryPlants = useSelector((state) => state.categories.categoryPlants);

    useEffect(() => {
        dispatch(fetchCategory(categoryId));
    }, [dispatch, categoryId]);

    return (
        <View>
            <Text onPress={() => navigation.goBack()}>Back</Text>
            <Text>Category name: {categoryName}</Text>
            {categoryPlants && categoryPlants.plants ? (
                <ScrollView>
                    {categoryPlants.plants.map((plant) => (
                        <Text key={plant.id}>{plant.name}</Text>
                    ))}
                </ScrollView>
            ) : (
                <Text>Loading plants...</Text>
            )}
        </View>
    );
};

export default CategoryDetail;
