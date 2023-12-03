import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import { apiCategories } from '../api/const';

const Usages = () => {
    // UseState
    const [Categories, setCategories] = useState([]);

    // Fetching data
    const getCategories = async () => {
        try {
            const response = await fetch(apiCategories);
            const Categories = await response.json();
            setCategories(Categories);
        } catch (error) {
            console.error(error);
        }
    };

    // useEffect
    useEffect(() => {
        getCategories();
    }, [])

    return (
        <View>
            <Text>Liste des catégories :</Text>
            <FlatList
                data={Categories}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => <Text>{item.name}</Text>}
            />
        </View>
    );
};

export default Usages;
