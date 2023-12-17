import { View, Text, ScrollView } from 'react-native';
import React, { useEffect } from 'react';
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
        <View>
            {categoriesData ? (
                <ScrollView>
                    {categoriesData.map((category) => (
                        <Text
                            key={category.id}
                            onPress={() => {
                                // console.log('Navigating to CategoryDetail with category ID:', category.id);
                                navigation.navigate('CategoryScreen', {
                                    categoryId: category.id,
                                    categoryName: category.name,
                                });
                            }}
                        >
                            {category.name}
                        </Text>
                    ))}
                </ScrollView>
            ) : (
                <Text>Loading...</Text>
            )}
        </View>
    );
};

export default Usages;
