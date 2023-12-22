import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import auth from '@react-native-firebase/auth';
import Usages from '../../../screen/Symptome';
import Plantes from '../../../screen/Plante';
import Favoris from '../../../screen/Favoris';
import TopBar from '../../TopBar';
import Profile from '../../../screen/Profile';
import Register from '../../../screen/Register';
import Login from '../../../screen/Login';
import SymptomeDetail from '../../../screen/SymptomeDetail';
import PlantDetail from '../../../screen/PlantDetail';

const HomeStack = createStackNavigator();
const Drawer = createDrawerNavigator();

const MainStack = () => {
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

const HomeDrawer = () => {

    const [isUserAuthenticated, setIsUserAuthenticated] = useState(false);

    useEffect(() => {
        const unsubscribe = auth().onAuthStateChanged(user => {
            setIsUserAuthenticated(!!user);
        });

        return () => unsubscribe();
    }, []);

    return (
        <Drawer.Navigator>
            <Drawer.Screen
                name="Home"
                component={MainStack}
                options={{ headerShown: false }}
            />
            {isUserAuthenticated ? (
                <>
                    {/* Afficher les écrans lorsque l'utilisateur est connecté */}
                    <Drawer.Screen
                        name="ProfileScreen"
                        component={Profile}
                        options={{ headerShown: false }}
                    />
                </>
            ) : (
                <>
                    {/* Afficher les écrans lorsque l'utilisateur n'est pas connecté */}
                    <Drawer.Screen
                        name="LoginScreen"
                        component={Login}
                        options={{ headerShown: false }}
                    />
                    <Drawer.Screen
                        name="RegisterScreen"
                        component={Register}
                        options={{ headerShown: false, drawerLabel: () => null }}
                    />
                </>
            )}
            <Drawer.Screen
                name="SymptomeDetail"
                component={SymptomeDetail}
                options={{ headerShown: false, drawerLabel: () => null }}
            />
            <Drawer.Screen
                name="PlantDetail"
                component={PlantDetail}
                options={{ headerShown: false, drawerLabel: () => null }}
            />
        </Drawer.Navigator>
    )
}

export default HomeDrawer