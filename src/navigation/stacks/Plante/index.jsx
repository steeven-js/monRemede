import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import Info from '../../../screen/Info';
import Propriete from '../../../screen/Propriete';
import Utilisation from '../../../screen/Utilisation';
import Precaution from '../../../screen/Precaution';

const Stack = createStackNavigator();

const PlanteStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Info" component={Info} />
            <Stack.Screen name="Propriete" component={Propriete} />
            <Stack.Screen name="Utilisation" component={Utilisation} />
            <Stack.Screen name="Precaution" component={Precaution} />
        </Stack.Navigator>
    )
}

export default PlanteStack