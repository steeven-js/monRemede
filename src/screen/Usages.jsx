import { View, Text } from 'react-native';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from '../../store/fetchApi/FetchCategories';

const Usages = ( {navigation} ) => {
    // UseDispatch permet de dispatcher une action
    const dispatch = useDispatch();
    // useSelector permet de récupérer une donnée du store
    const categoriesData = useSelector((state) => state.categories.data);

    useEffect(() => {
        // On dispatch l'action fetchCategories
        dispatch(fetchCategories());
    }, [dispatch]);

    return (
        <View>
            {categoriesData ? (
                <View>
                    {categoriesData.map((category) => (
                        <Text key={category.id} onPress={() => {navigation.navigate('Category')} }>{category.name}</Text>
                    ))}
                </View>
            ) : (
                <Text>Loading...</Text>
            )}
        </View>
    );
}

export default Usages