import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import auth from '@react-native-firebase/auth';
import MenuIcon from 'react-native-vector-icons/Ionicons';
import IconLogout from 'react-native-vector-icons/AntDesign';
import styles from './styles';

const Profile = ({ navigation }) => {
    const [isUserAuthenticated, setIsUserAuthenticated] = useState(false);
    const [userEmail, setUserEmail] = useState('');

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

    const handleLogin = () => {
        navigation.navigate('Se connecté');
    };

    const handleLogout = async () => {
        try {
            await auth().signOut();
            console.log('User logged out successfully!');
            setIsUserAuthenticated(false);
            setUserEmail('');
            navigation.navigate('Home');
        } catch (error) {
            console.error('Error logging out:', error.message);
        }
    };

    return (
        <View style={styles.profile}>
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
            <View style={styles.container}>
                <Text style={[styles.font]}>Profile</Text>
                {isUserAuthenticated && (
                    <View>
                        <Text style={[styles.font]}>Email: {userEmail}</Text>
                    </View>
                )}
                {!isUserAuthenticated && <Button title="Login" onPress={handleLogin} />}
            </View>
        </View>
    );
};

export default Profile;
