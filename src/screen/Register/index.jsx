import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, Image, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MenuIcon from 'react-native-vector-icons/Ionicons';
import auth from '@react-native-firebase/auth';
import styles from './styles';

import { icons } from '../../constants';

const Register = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState(null);

    const handleSignUp = async () => {
        try {
            await auth().createUserWithEmailAndPassword(email, password);
            console.log('Utilisateur enregistré avec succès !');
            navigation.navigate('Home');
        } catch (error) {
            console.error('Erreur lors de l\'enregistrement de l\'utilisateur :', error.message);
        }
    };

    const handleLogout = async () => {
        try {
            await auth().signOut();
            console.log('Utilisateur déconnecté avec succès !');

            navigation.navigate('Home');
        } catch (error) {
            console.error('Erreur lors de la déconnexion :', error.message);
        }
    };

    const checkUserLoggedIn = async () => {
        const currentUser = auth().currentUser;
        setUser(currentUser);
    };

    useEffect(() => {
        const unsubscribe = auth().onAuthStateChanged((user) => {
            setUser(user);
        });

        return () => {
            unsubscribe();
        };
    }, []);

    useEffect(() => {
        checkUserLoggedIn();
    }, []);

    return (
        <View style={styles.register}>
            <LinearGradient
                colors={['#2e6a30', '#439a46']} // Dégradé de deux tons de vert foncé
                locations={[0, 0.65]} // Positions relatives des couleurs
                useAngle
                angle={180}
                style={styles.header}
            >
                <MenuIcon name="menu" size={30} color="#fff" onPress={() => navigation.openDrawer()} />
                <Text style={styles.textTopNavBar}>S'inscrire</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Plantes médicinales')}>
                    <Image source={icons.plante} style={styles.icon} />
                </TouchableOpacity>
            </LinearGradient>
            <Text style={styles.title}>Inscription</Text>
            {user ? (
                <View>
                    <Text>Bienvenue {user.email}</Text>
                    <Button title="Déconnexion" onPress={handleLogout} />
                </View>
            ) : (
                <View>
                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                        autoCapitalize="none"
                        keyboardType="email-address"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Mot de passe"
                        secureTextEntry
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                    />
                    <Button title="Inscription" onPress={handleSignUp} />
                    <Text>Vous avez déjà un compte ? </Text>
                    <Text onPress={() => navigation.navigate('Se connecter')}>Connexion</Text>
                </View>
            )}
        </View>
    );
};

export default Register;
