import React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import PlantNavBar from '../navigation/PlantNavBar';
import Info from './plant/Info';
import Propriete from './plant/Propriete';
import Utilisation from './plant/Utilisation';
import Precaution from './plant/Precaution';

const PlantInfoStack = createStackNavigator();

const PlantDetail = ({ navigation, route }) => {
    const { plantName } = route.params;

    return (
        <PlantInfoStack.Navigator
            initialRouteName="Info"
            screenOptions={{
                header: (props) => <PlantNavBar {...props} />,
                animationEnabled: false,
            }}
        >
            <PlantInfoStack.Screen name="Info" component={Info} />
            <PlantInfoStack.Screen name="Propriete" component={Propriete} />
            <PlantInfoStack.Screen name="Utilisation" component={Utilisation} />
            <PlantInfoStack.Screen name="Precaution" component={Precaution} />
        </PlantInfoStack.Navigator>
    );
}

export default PlantDetail;
