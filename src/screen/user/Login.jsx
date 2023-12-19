import { View, Text, Button } from 'react-native'
import BackIcon from 'react-native-vector-icons/Ionicons';
import React from 'react'

const Login = ( {navigation} ) => {
    return (
        <View>
            <BackIcon name="arrow-back" size={30} color="#000" onPress={() => navigation.navigate('Plantes médicinales')} />
            <Text>Login</Text>
            <Button title="Register" onPress={() => {navigation.navigate('RegisterScreen')}} />
        </View>
    )
}

export default Login