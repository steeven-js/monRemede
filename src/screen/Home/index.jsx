import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import TopBar from '../../navigation/TopBar';
import Usages from '../Symptome';
import Plantes from '../Plante';
import Favoris from '../Favoris';

const HomeStack = createStackNavigator();

const Home = () => {
    return (
        <HomeStack.Navigator
            initialRouteName="Plantes médicinales"
            screenOptions={{
                header: (props) => <TopBar {...props} />,
                animationEnabled: false,
            }}
        >
            <HomeStack.Screen name="Usages thérapeutiques" component={Usages} />
            <HomeStack.Screen name="Plantes médicinales" component={Plantes} />
            <HomeStack.Screen name="Favoris" component={Favoris} />
        </HomeStack.Navigator>
    );
};

export default Home;