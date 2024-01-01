import React, { useEffect, useState } from 'react';
import { View, Text, Button, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import auth from '@react-native-firebase/auth';
import MenuIcon from 'react-native-vector-icons/Ionicons';
import IconLogout from 'react-native-vector-icons/AntDesign';
import * as Animatable from 'react-native-animatable';
import MyProfileData from '../../data/MyProfileData';
import { SvgXml } from 'react-native-svg';
import av_man_2 from '../../assets/avatars/svg/av_man_2';
import { COLORS } from '../../config/Colors';
import { STANDARD_USER_AVATAR_WRAPPER_SIZE } from '../../config/Constants';
import NavigationLink from '../../components/links/NavigationLink';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

const MyProfile = () => {
    const [isUserAuthenticated, setIsUserAuthenticated] = useState(false);
    const [userEmail, setUserEmail] = useState('');
    const navigation = useNavigation();

    useEffect(() => {
        const unsubscribe = auth().onAuthStateChanged((user) => {
            if (user) {
                setIsUserAuthenticated(true);
                setUserEmail(user.email);
            } else {
                setIsUserAuthenticated(false);
                setUserEmail('');
            }
        });

        return () => unsubscribe();
    }, []);

    const handleLogout = async () => {
        try {
            await auth().signOut();
            setIsUserAuthenticated(false);
            setUserEmail('');
            console.log('User logged out successfully!');
            navigation.navigate('Home', {
                screen: 'Plantes médicinales',
            });
        } catch (error) {
            console.error('Error logging out:', error.message);
        }
    };

    return (
        <View style={[styles.mainWrapper, { backgroundColor: COLORS.accent }]}>

            <LinearGradient
                colors={['#2e6a30', '#439a46']} // Dégradé de deux tons de vert foncé
                locations={[0, 0.65]} // Positions relatives des couleurs
                useAngle
                angle={180}
                style={styles.header}
            >
                <MenuIcon name="menu" size={30} color="#fff" onPress={() => navigation.openDrawer()} />
                <Text style={styles.textTopNavBar}>Mon Profile</Text>
                <IconLogout name="logout" size={30} color="#fff" onPress={handleLogout} />
            </LinearGradient>

            {isUserAuthenticated && (

                <Animatable.View
                    animation="fadeInUp"
                    delay={100}
                    style={[styles.contentWrapper, { backgroundColor: COLORS.primary }]}>
                    <ScrollView
                        showsVerticalScrollIndicator={false}
                        bounces={false}
                        contentContainerStyle={styles.scrollViewContentContainerStyle}>
                        <Animatable.View
                            animation="fadeInUp"
                            delay={300}
                            style={styles.profileInfoWrapper}>
                            {/* Avatar */}
                            <SvgXml
                                xml={av_man_2}
                                width={STANDARD_USER_AVATAR_WRAPPER_SIZE * 1.5}
                                height={STANDARD_USER_AVATAR_WRAPPER_SIZE * 1.5}
                            />

                            {/* Vertical spacer */}
                            <View style={styles.verticalSpacer} />

                            {/* Profile name */}
                            <Animatable.Text
                                animation="fadeInUp"
                                delay={500}
                                style={[styles.profileName, { color: COLORS.textHighContrast }]}>
                                Jonathan Doe
                            </Animatable.Text>

                            {/* Profile email */}
                            <Animatable.Text
                                animation="fadeInUp"
                                delay={700}
                                style={[styles.profileEmail, { color: COLORS.accent }]}>
                                {userEmail}
                            </Animatable.Text>
                        </Animatable.View>

                        {/* Vertical spacer */}
                        <View style={styles.verticalSpacer} />

                        <Animatable.View animation="fadeInUp" delay={900}>
                            {/* Mapping */}
                            {MyProfileData.map((item, index) => (
                                <View key={index}>
                                    <NavigationLink
                                        leftIcon={item.leftIcon}
                                        label={item.label}
                                        onPress={() => navigation.navigate(item.label)}
                                    />
                                    {index !== MyProfileData.length - 1 && (
                                        <View style={styles.verticalSpacer} />
                                    )}
                                </View>
                            ))}
                        </Animatable.View>
                    </ScrollView>

                </Animatable.View>
            )}
        </View>
    );
};

export default MyProfile;
