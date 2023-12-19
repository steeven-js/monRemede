import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { useDispatch } from 'react-redux';
import { setUser } from '../../../redux/actions/userActions';
import auth from '@react-native-firebase/auth';
import BackIcon from 'react-native-vector-icons/Ionicons';

const Login = ({ navigation }) => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            const userCredential = await auth().signInWithEmailAndPassword(
                email,
                password
            );
            const user = userCredential.user;
            // Dispatch l'action pour mettre à jour le state Redux avec l'utilisateur
            dispatch(setUser(user));
            console.log('User logged in successfully!');
            // Rediriger vers la page d'accueil après l'authentification réussie
            navigation.navigate('Home');
        } catch (error) {
            console.error('Error logging in:', error.message);
        }
    };


    return (
        <View>
            <BackIcon name="arrow-back" size={30} color="#000" onPress={() => navigation.navigate('Home')} />
            <Text>Login</Text>
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
            <Button title="Login" onPress={handleLogin} />
            <Text>Don't have an account? </Text>
            <Text onPress={() => navigation.navigate('RegisterScreen')}>Register</Text>
        </View>
    );
};

export default Login;
