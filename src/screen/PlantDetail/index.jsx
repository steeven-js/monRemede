import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import PlantNavBar from '../../navigation/PlantNavBar';
import Info from '../Info';
import Propriete from '../Propriete';
import Utilisation from '../Utilisation';
import Precaution from '../Precaution';

const PlantInfoStack = createStackNavigator();

const PlantDetail = ({ route }) => {
    const { plantId, plantName, symptomeId, symptomeName } = route.params;

    const screenNames = ["Info", "Propriete", "Utilisation", "Precaution"];

    return (
        <PlantInfoStack.Navigator
            initialRouteName="Info"
            screenOptions={{
                header: (props) => (
                    <PlantNavBar {...props} route={{ params: { plantId, plantName, symptomeId, symptomeName } }} screenNames={screenNames} />
                ),
                animationEnabled: false,
            }}
        >
            <PlantInfoStack.Screen name="Info" component={Info} initialParams={{ plantId, plantName }} />
            <PlantInfoStack.Screen name="Propriete" component={Propriete} initialParams={{ plantId }} />
            <PlantInfoStack.Screen name="Utilisation" component={Utilisation} initialParams={{ plantId }} />
            <PlantInfoStack.Screen name="Precaution" component={Precaution} initialParams={{ plantId }} />
        </PlantInfoStack.Navigator>
    );
}

export default PlantDetail;
