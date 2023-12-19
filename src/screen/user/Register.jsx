import { View, Text, Button } from 'react-native'
import BackIcon from 'react-native-vector-icons/Ionicons';
import React from 'react'

const Register = ({ navigation }) => {
    return (
        <View>
            <BackIcon name="arrow-back" size={30} color="#000" onPress={() => navigation.navigate('Plantes médicinales')} />
            <Text>Register</Text>
            <Button title="Login" onPress={() => { navigation.navigate('LoginScreen') }} />
        </View>
    )
}

export default Register