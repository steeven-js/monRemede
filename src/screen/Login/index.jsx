import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import auth from '@react-native-firebase/auth';
import BackIcon from 'react-native-vector-icons/Ionicons';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';

const Connexion = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [afficherMotDePasse, setAfficherMotDePasse] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleConnexion = async () => {
        try {
            setIsLoading(true);

            const userCredential = await auth().signInWithEmailAndPassword(email, password);
            const user = userCredential.user;

            console.log('Utilisateur connecté avec succès !');

            // Réinitialiser les champs d'entrée après une identification réussie
            setEmail('');
            setPassword('');

            // Rediriger vers la page d'accueil après l'authentification réussie
            navigation.navigate('Home');
        } catch (error) {
            console.error('Erreur de connexion :', error.message);
            // Afficher un message d'erreur à l'utilisateur, par exemple avec une alerte
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <BackIcon name="arrow-back" size={30} color="#000" onPress={() => navigation.navigate('Home')} />
                <Text>Connexion</Text>
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
                    secureTextEntry={!afficherMotDePasse}
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                />
                <Button title="Connexion" onPress={handleConnexion} disabled={isLoading} />
                <Button
                    title={afficherMotDePasse ? 'Cacher le mot de passe' : 'Afficher le mot de passe'}
                    onPress={() => setAfficherMotDePasse(!afficherMotDePasse)}
                />
                <Text>Vous n'avez pas de compte ? </Text>
                <Text onPress={() => navigation.navigate('RegisterScreen')}>Inscription</Text>
            </View>
        </SafeAreaView>
    );
};

export default Connexion;
