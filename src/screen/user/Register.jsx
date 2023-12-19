import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import auth from '@react-native-firebase/auth';

const Register = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUp = async () => {
        try {
            await auth().createUserWithEmailAndPassword(email, password);
            // L'utilisateur est inscrit avec succès
            console.log('User registered successfully!');
        } catch (error) {
            console.error('Error registering user:', error.message);
        }
    };

    return (
        <View 
            style={{ 
                flex: 1, 
                justifyContent: 'center', 
                alignItems: 'center' 
            }}
        >
            <Text>Register</Text>
            <TextInput
                style={{ borderBottomWidth: 1, borderColor: 'black' }}
                placeholder="Email"
                value={email}
                onChangeText={(text) => setEmail(text)}
            />
            <TextInput
                style={{ borderBottomWidth: 1, borderColor: 'black' }}
                placeholder="Password"
                secureTextEntry
                value={password}
                onChangeText={(text) => setPassword(text)}
            />
            <Button title="Register" onPress={handleSignUp} />
            <Text>Already have an account? </Text>
            <Text onPress={() => navigation.navigate('LoginScreen')}>Login</Text>
        </View>
    );
};

export default Register;
