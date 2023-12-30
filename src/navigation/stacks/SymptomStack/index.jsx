import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import SymptomeDetail from '../../../screen/SymptomeDetail';

const Stack = createStackNavigator();

const SymptomeStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="SymptomeDetail" component={SymptomeDetail} />
        </Stack.Navigator>
    )
}

export default SymptomeStack