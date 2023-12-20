import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import auth from '@react-native-firebase/auth';
import BackIcon from 'react-native-vector-icons/Ionicons';
import IconLogout from 'react-native-vector-icons/AntDesign';
import styles from './styles';

const Profile = ({ navigation }) => {
    const [isUserAuthenticated, setIsUserAuthenticated] = useState(false);
    const [userEmail, setUserEmail] = useState('');

    useEffect(() => {
        // Check if the user is authenticated when the component mounts
        const unsubscribe = auth().onAuthStateChanged((user) => {
            if (user) {
                setIsUserAuthenticated(true);
                setUserEmail(user.email);
            } else {
                setIsUserAuthenticated(false);
                setUserEmail('');
            }
        });

        // Unsubscribe when the component unmounts
        return () => unsubscribe();
    }, []);

    const handleLogin = () => {
        // Navigate to LoginScreen
        navigation.navigate('LoginScreen');
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
            <View style={styles.nav}>
                <BackIcon name="arrow-back" size={30} color="#000" onPress={() => navigation.navigate('Home')} />
                <Text style={[styles.font]}>Profile</Text>
                <IconLogout name="logout" size={30} color="#000" onPress={handleLogout} />
            </View>
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
