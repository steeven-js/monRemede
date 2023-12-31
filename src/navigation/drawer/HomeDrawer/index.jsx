import React, { useEffect, useState } from 'react';
import { ImageBackground, View, Image, Text } from 'react-native';
import { createDrawerNavigator, DrawerItemList } from '@react-navigation/drawer';
import { SafeAreaView } from 'react-native-safe-area-context';
import auth from '@react-native-firebase/auth';
import HomeStack from '../../stacks/HomeStack';
import Profile from '../../../screen/Profile';
import Connexion from '../../../screen/Login';
import Register from '../../../screen/Register';

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
            initialRouteName="HomeStack"
            screenOptions={{ headerShown: false }}
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
                                <Text style={styles.brandName}>Mon Remède</Text>
                                <Text style={styles.brandSlogan}>Les soins par les plantes</Text>
                            </View>
                        </ImageBackground>
                        <DrawerItemList {...props} />
                    </SafeAreaView>
                )

            }}
        >
            <Drawer.Screen
                name="Accueil"
                component={HomeStack}
                options={{
                    headerShown: false,
                    drawerIcon: () => (
                        <Image
                            source={
                                require('../../../assets/icons/png/soin.png')
                            }
                            style={styles.drawerItemIcon}
                        />
                    ),
                    drawerLabelStyle: styles.drawerItemLabel,
                }}
            />
            {isUserAuthenticated ? (
                <>
                    {/* Afficher les écrans lorsque l'utilisateur est connecté */}
                    <Drawer.Screen
                        name="Mon Profile"
                        component={Profile}
                        options={{
                            headerShown: false,
                            drawerIcon: () => (
                                <Image
                                    source={
                                        require('../../../assets/icons/png/info.png')
                                    }
                                    style={styles.drawerItemIcon}
                                />
                            ),
                            drawerLabelStyle: styles.drawerItemLabel,
                        }}
                    />
                </>
            ) : (
                <>
                    {/* Afficher les écrans lorsque l'utilisateur n'est pas connecté */}
                    <Drawer.Screen
                        name="Se connecter"
                        component={Connexion}
                        options={{
                            headerShown: false,
                            drawerIcon: () => (
                                <Image
                                    source={
                                        require('../../../assets/icons/png/soin.png')
                                    }
                                    style={styles.drawerItemIcon}
                                />
                            ),
                            drawerLabelStyle: styles.drawerItemLabel,
                        }}
                    />
                    <Drawer.Screen
                        name="S'inscrire"
                        component={Register}
                        options={{
                            headerShown: false,
                            drawerIcon: () => (
                                <Image
                                    source={
                                        require('../../../assets/icons/png/soin.png')
                                    }
                                    style={styles.drawerItemIcon}
                                />
                            ),
                            drawerLabelStyle: styles.drawerItemLabel,
                        }}
                    />
                </>
            )}
        </Drawer.Navigator>
    )
}

export default HomeDrawer