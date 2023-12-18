import { View, Text } from 'react-native';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPlant } from '../../../store/fetchApi';

const Info = ({ route }) => {
    const { plantId } = route.params;
    const dispatch = useDispatch();

    // Fetch plant data on component mount
    useEffect(() => {
        dispatch(fetchPlant(plantId));
    }, [dispatch, plantId]);

    // Retrieve the plant data from the Redux store
    const plant = useSelector((state) => state.plants.selectedPlant);

    if (!plant) {
        // If the data is not available yet, you can render a loading indicator or return null
        return (
            <View>
                <Text>Loading...</Text>
            </View>
        );
    }

    // Extract the relevant information from the plant data
    const { name, infos, proprietes, utilisations, precautions } = plant;

    return (
        <View>
            <Text>Info - Plant ID: {plantId}</Text>
            <Text>Info - Plant Name: {name}</Text>

            {/* Render other plant information */}
            <Text>Scientific Name: {infos.nscient}</Text>
            <Text>Family: {infos.famille}</Text>
            <Text>Genus: {infos.genre}</Text>
            <Text>Description: {infos.description}</Text>
            <Text>Habitat: {infos.habitat}</Text>

            {/* Render other sections like properties, uses, and precautions */}
            <Text>Property: {proprietes.propriete}</Text>
            <Text>Internal Use: {utilisations.interne}</Text>
            <Text>External Use: {utilisations.externe}</Text>
            <Text>Precaution: {precautions.precaution}</Text>
        </View>
    );
}

export default Info;