import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MenuIcon from 'react-native-vector-icons/Ionicons';
import auth from '@react-native-firebase/auth';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';

import { icons } from '../../constants';

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
        <View style={styles.login}>
            <LinearGradient
                colors={['#2e6a30', '#439a46']} // Dégradé de deux tons de vert foncé
                locations={[0, 0.65]} // Positions relatives des couleurs
                useAngle
                angle={180}
                style={styles.header}
            >
                <MenuIcon name="menu" size={30} color="#fff" onPress={() => navigation.openDrawer()} />
                <Text style={styles.textTopNavBar}>Se connecter</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Plantes médicinales')}>
                    <Image source={icons.plante} style={styles.icon} />
                </TouchableOpacity>
            </LinearGradient>
            <View>
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
                <Text onPress={() => navigation.navigate('S\'inscrire')}>Inscription</Text>
            </View>
        </View>
    );
};

export default Connexion;
