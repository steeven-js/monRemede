import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import auth from '@react-native-firebase/auth';
import BackIcon from 'react-native-vector-icons/Ionicons';


const Register = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState(null);

    const handleSignUp = async () => {
        try {
            await auth().createUserWithEmailAndPassword(email, password);
            console.log('User registered successfully!');
            navigation.navigate('Home');
        } catch (error) {
            console.error('Error registering user:', error.message);
        }
    };

    const handleLogout = async () => {
        try {
            await auth().signOut();
            console.log('User logged out successfully!');
            // Rediriger vers la page d'accueil
            navigation.navigate('Home');
        } catch (error) {
            console.error('Error logging out:', error.message);
        }
    };

    const checkUserLoggedIn = () => {
        const currentUser = auth().currentUser;
        setUser(currentUser);
    };

    useEffect(() => {
        checkUserLoggedIn();
    }, []);

    return (
        <View>
            <BackIcon name="arrow-back" size={30} color="#000" onPress={() => navigation.navigate('Home')} />
            <Text>Register</Text>
            {user ? (
                <View>
                    <Text>Welcome {user.email}</Text>
                    <Button title="Logout" onPress={handleLogout} />
                </View>
            ) : (
                <View>
                    <TextInput
                        placeholder="Email"
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                    />
                    <TextInput
                        placeholder="Password"
                        secureTextEntry
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                    />
                    <Button title="Register" onPress={handleSignUp} />
                    <Text>Already have an account? </Text>
                    <Text onPress={() => navigation.navigate('LoginScreen')}>Login</Text>
                </View>
            )}
        </View>
    );
};

export default Register;
