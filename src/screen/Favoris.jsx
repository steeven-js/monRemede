import React from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';

const Favoris = () => {
    const favorites = useSelector((state) => state.favorites);

    return (
        <View>
            <Text>Favoris</Text>
            {favorites.map((item) => (
                <View key={item.plantId}>
                    <Text>{item.plantName}</Text>
                    {/* Add more details if needed */}
                </View>
            ))}
        </View>
    );
}

export default Favoris;
