import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import Home from '../../../screen/Home';
import SymptomeStack from '../SymptomStack';
import PlanteStack from '../Plante';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="SymptomeStack" component={SymptomeStack} />
            <Stack.Screen name="PlanteStack" component={PlanteStack} />
        </Stack.Navigator>
    )
}

export default HomeStack