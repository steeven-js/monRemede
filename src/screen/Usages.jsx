import { View, Text } from 'react-native';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from '../../store/fetchApi/FetchCategories';

const Usages = () => {
    const dispatch = useDispatch();
    const categoriesData = useSelector((state) => state.categories.data);

    useEffect(() => {
        dispatch(fetchCategories());
    }, [dispatch]);

    return (
        <View>
            {categoriesData ? (
                <View>
                    {categoriesData.map((category) => (
                        <Text key={category.id}>{category.name}</Text>
                    ))}
                </View>
            ) : (
                <Text>Loading...</Text>
            )}
        </View>
    );
}

export default Usages