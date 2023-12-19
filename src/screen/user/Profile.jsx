import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';
import auth from '@react-native-firebase/auth';

const Profile = ({ navigation }) => {
    const [isUserAuthenticated, setIsUserAuthenticated] = useState(false);

    useEffect(() => {
        // Check if the user is authenticated when the component mounts
        const unsubscribe = auth().onAuthStateChanged((user) => {
            if (user) {
                setIsUserAuthenticated(true);
            } else {
                setIsUserAuthenticated(false);
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
        } catch (error) {
            console.error('Error logging out:', error.message);
        }
    };

    return (
        <View>
            <Text>Profile</Text>
            {isUserAuthenticated ? (
                <Button title="Logout" onPress={handleLogout} />
            ) : (
                <Button title="Login" onPress={handleLogin}/>
            )}
        </View>
    );
};

export default Profile;
