import React, { useEffect, useState } from 'react';
import { createDrawerNavigator, DrawerItemList } from '@react-navigation/drawer';
import auth from '@react-native-firebase/auth';
import Profile from '../../../screen/Profile';
import Register from '../../../screen/Register';
import Login from '../../../screen/Login';
import SymptomeDetail from '../../../screen/SymptomeDetail';
import Home from '../../stacks/Home';
import Info from '../../../screen/Info';
import Propriete from '../../../screen/Propriete';
import Utilisation from '../../../screen/Utilisation';
import Precaution from '../../../screen/Precaution';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ImageBackground, View, Image, Text } from 'react-native';
import styles from './styles';

const Drawer = createDrawerNavigator();

const HomeDrawer = () => {

    const [isUserAuthenticated, setIsUserAuthenticated] = useState(false);

    useEffect(() => {
        const unsubscribe = auth().onAuthStateChanged(user => {
            setIsUserAuthenticated(!!user);
        });

        return () => unsubscribe();
    }, []);

    return (
        <Drawer.Navigator
            drawerContent={(props) => {
                return (
                    <SafeAreaView>
                        <ImageBackground
                            source={require('../../../assets/images/backgrounds/liquid-cheese-background.png')}
                            style={styles.drawerHeaderImageBackground}
                        >
                            <View style={styles.logoWrapper}>
                                <Image
                                    source={require('../../../assets/images/logos/logo_light.png')}
                                    style={styles.logo}
                                />
                            </View>
                            <View>
                                <Text style={styles.brandName}>mon Remède</Text>
                                <Text style={styles.brandSlogan}>Plantes médicinales</Text>
                            </View>
                        </ImageBackground>
                        <DrawerItemList {...props} />
                    </SafeAreaView>
                )

            }}
        >
            <Drawer.Screen
                name="Home"
                component={Home}
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
                name="Info"
                component={Info}
                options={{ headerShown: false, drawerLabel: () => null }}
            />
            <Drawer.Screen
                name="Propriete"
                component={Propriete}
                options={{ headerShown: false, drawerLabel: () => null }}
            />
            <Drawer.Screen
                name="Utilisation"
                component={Utilisation}
                options={{ headerShown: false, drawerLabel: () => null }}
            />
            <Drawer.Screen
                name="Precaution"
                component={Precaution}
                options={{ headerShown: false, drawerLabel: () => null }}
            />
        </Drawer.Navigator>
    )
}

export default HomeDrawer