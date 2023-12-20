import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import auth from '@react-native-firebase/auth';
import Icon from 'react-native-vector-icons/Ionicons';

const Register = ({ navigation }) => {
    const dispatch = useDispatch();
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

            // Dispatch l'action pour mettre à jour le state Redux avec l'utilisateur
            dispatch(setUser(null));

            // Rediriger vers la page d'accueil
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
            // Se désabonner lorsque le composant est démonté
            unsubscribe();
        };
    }, []);

    useEffect(() => {
        checkUserLoggedIn();
    }, []);

    return (
        <View style={styles.container}>
            <Icon name="arrow-back" size={30} color="#000" onPress={() => navigation.navigate('Home')} />
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
                    <Text onPress={() => navigation.navigate('LoginScreen')}>Connexion</Text>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 8,
    },
});

export default Register;
