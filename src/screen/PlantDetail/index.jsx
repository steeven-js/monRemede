import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import PlantNavBar from '../../navigation/PlantNavBar';
import Info from '../Info';
import Propriete from '../Propriete';
import Utilisation from '../Utilisation';
import Precaution from '../Precaution';

const PlantInfoStack = createStackNavigator();

const PlantDetail = ({ navigation, route }) => {
    const { plantId } = route.params;
    const { plantName } = route.params;

    // console.log('plantId', plantId)
    // console.log('plantName', plantName)

    return (
        <PlantInfoStack.Navigator
            initialRouteName="Info"
            screenOptions={{
                header: (props) => <PlantNavBar {...props} route={{ params: { plantId, plantName } }} />,
                animationEnabled: false,
            }}
        >
            <PlantInfoStack.Screen name="Info">
                {(props) => <Info {...props} route={{ params: { plantId, plantName } }} />}
            </PlantInfoStack.Screen>

            <PlantInfoStack.Screen name="Propriete">
                {(props) => <Propriete {...props} route={{ params: { plantId } }} />}
            </PlantInfoStack.Screen>

            <PlantInfoStack.Screen name="Utilisation">
                {(props) => <Utilisation {...props} route={{ params: { plantId } }} />}
            </PlantInfoStack.Screen>

            <PlantInfoStack.Screen name="Precaution">
                {(props) => <Precaution {...props} route={{ params: { plantId } }} />}
            </PlantInfoStack.Screen>
        </PlantInfoStack.Navigator>
    );
}

export default PlantDetail;
