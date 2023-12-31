import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import MenuIcon from 'react-native-vector-icons/Ionicons';
import auth from '@react-native-firebase/auth';
import { COLORS } from '../../config/Colors';

import styles from './styles';

import { icons } from '../../constants';
import ScreenInfo from '../../components/paragraphs/ScreenInfo';
import CustomTextInput from '../../components/inputs/TextInput';
import PasswordTextInput from '../../components/inputs/PasswordTextInput';
import Question from '../../components/paragraphs/Question';
import Link from '../../components/links/Link';
import Button from '../../components/buttons/Button';

const Register = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [afficherMotDePasse, setAfficherMotDePasse] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [user, setUser] = useState(null);

    const handleSignUp = async () => {
        try {
            setIsLoading(true);

            await auth().createUserWithEmailAndPassword(email, password);
            console.log('Utilisateur enregistré avec succès !');
            navigation.navigate('Home');
        } catch (error) {
            console.error('Erreur lors de l\'enregistrement de l\'utilisateur :', error.message);
        } finally {
            setIsLoading(false);
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
        <View style={[styles.mainWrapper, { backgroundColor: COLORS.primary }]}>
            <LinearGradient
                colors={['#2e6a30', '#439a46']}
                locations={[0, 0.65]}
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

            <Animatable.View
                animation="fadeInUp"
                delay={100}
                style={[styles.formWrapper, { backgroundColor: COLORS.primary }]}>
                <Animatable.View animation="fadeInUp" delay={500}>
                    <ScreenInfo info="Bonjour, veuillez saisir vos informations de compte pour créer un nouveau compte client sur Mon Remède." />
                </Animatable.View>

                <View style={styles.verticalSpacer} />
                <View style={styles.verticalSpacer} />

                {isLoading ? (
                    <ActivityIndicator size="large" color={COLORS.white} />
                ) : (
                    <>
                        {user ? (
                            <View>
                                <Text>Bienvenue {user.email}</Text>
                                <Button title="Déconnexion" onPress={handleLogout} />
                            </View>
                        ) : (
                            <View>
                                <Animatable.View animation="fadeInUp" delay={700}>
                                    <CustomTextInput
                                        label="Email"
                                        placeholder="Email"
                                        value={email}
                                        onChangeText={(text) => setEmail(text)}
                                        autoCapitalize="none"
                                        keyboardType="email-address"
                                    />
                                </Animatable.View>

                                <View style={styles.verticalSpacer} />

                                <Animatable.View animation="fadeInUp" delay={900}>
                                    <PasswordTextInput
                                        label="Mot de passe"
                                        placeholder="Mot de passe"
                                        value={password}
                                        onChangeText={(text) => setPassword(text)}
                                        afficherMotDePasse={afficherMotDePasse}
                                        setAfficherMotDePasse={setAfficherMotDePasse}
                                    />
                                </Animatable.View>

                                <View style={styles.verticalSpacer} />

                                <Animatable.View animation="fadeInUp" delay={1300}>
                                    <Button
                                        label="S'inscrire"
                                        onPress={handleSignUp}
                                    />
                                </Animatable.View>

                                <View style={styles.verticalSpacer} />

                                <Animatable.View
                                    animation="fadeInUp"
                                    delay={1500}
                                    style={styles.questionAndLinkWrapper}>
                                    <Question question="Vous avez déjà un compte?" />
                                    <Link label="Se connecter" onPress={() => navigation.navigate('Se connecter')} />
                                </Animatable.View>
                            </View>
                        )}
                    </>
                )}
            </Animatable.View>
        </View>
    );
};

export default Register;
