import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import TopBar from '../../tabs/TopBar';
import Usages from '../../../screen/Symptome';
import Plantes from '../../../screen/Plante';
import Favoris from '../../../screen/Favoris';

const HomeStack = createStackNavigator();

const Home = () => {
    return (
        <HomeStack.Navigator
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