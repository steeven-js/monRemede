import { View, Text, ScrollView } from 'react-native'
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPlants } from '../../store/fetchApi';

const Plantes = ({navigation}) => {
    const dispatch = useDispatch();
    const plantsData = useSelector((state) => state.plants.data);

    useEffect(() => {
        // console.log('Fetching categories...');
        dispatch(fetchPlants());
    }, [dispatch]);

    return (
        <View>
            {plantsData ? (
                <ScrollView>
                    {plantsData.map((plant) => (
                        <Text
                            key={plant.id}
                            onPress={() => {
                                // console.log('Navigating to CategoryDetail with category ID:', category.id);
                                navigation.navigate('PlantScreen', {
                                    plantId: plant.id,
                                    plantName: plant.name,
                                });
                            }}
                        >
                            {plant.name}
                        </Text>
                    ))}
                </ScrollView>
            ) : (
                <Text>Loading...</Text>
            
            )}
        </View>
    )
}

export default Plantes