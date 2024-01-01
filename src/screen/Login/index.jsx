import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'react-native-linear-gradient';
import MenuIcon from 'react-native-vector-icons/Ionicons';
import auth from '@react-native-firebase/auth';

// Custom components
import Button from '../../components/buttons/Button';
import CustomTextInput from '../../components/inputs/TextInput';
import PasswordTextInput from '../../components/inputs/PasswordTextInput';
import ic_google from '../../assets/icons/svg/ic_google';

// Styles and configurations
import { COLORS } from '../../config/Colors';
import styles from './styles';
import * as Animatable from 'react-native-animatable';
import { STANDARD_SOCIAL_ICON_SIZE } from '../../config/Constants';

import { icons } from '../../constants';
import ScreenInfo from '../../components/paragraphs/ScreenInfo';
import Link from '../../components/links/Link';
import { SvgXml } from 'react-native-svg';
import OrDivider from '../../components/dividers/OrDivider';
import Question from '../../components/paragraphs/Question';

const Connexion = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [afficherMotDePasse, setAfficherMotDePasse] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    // New state variables for error messages
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [emptyFieldsError, setEmptyFieldsError] = useState('');

    const handleConnexion = async () => {
        try {
            setIsLoading(true);

            // Clear previous error messages
            setEmailError('');
            setPasswordError('');
            setEmptyFieldsError('');

            // Check for empty input fields
            if (!email || !password) {
                setEmptyFieldsError('Veuillez remplir tous les champs');
                return;
            }

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

            // Display error messages based on the type of error
            if (error.code === 'auth/invalid-email') {
                setEmailError('Adresse e-mail invalide');
            } else if (error.code === 'auth/invalid-credential') {
                setPasswordError('Mot de passe incorrect');
            } else {
                // Handle other types of errors
                // Example: alert('Une erreur s\'est produite lors de la connexion');
                // auth/too-many-requests]
            }
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <View style={[styles.mainWrapper, { backgroundColor: COLORS.accent }]}>
            <LinearGradient
                colors={['#2e6a30', '#439a46']}
                locations={[0, 0.65]}
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

            <Animatable.View
                animation="fadeInUp"
                delay={100}
                style={[styles.formWrapper, { backgroundColor: COLORS.primary }]}>

                <Animatable.View animation="fadeInUp" delay={500}>
                    <ScreenInfo info="Bonjour, veuillez fournir vos informations d'identification pour accéder à votre compte." />
                </Animatable.View>

                <View style={styles.verticalSpacer} />
                <View style={styles.verticalSpacer} />

                <Animatable.View animation="fadeInUp" delay={700}>
                    <CustomTextInput
                        label="Email"
                        placeholder="Email"
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                        autoCapitalize="none"
                        keyboardType="email-address"
                    />
                    {emailError ? <Text style={styles.errorMessage}>{emailError}</Text> : null}
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
                    {passwordError ? <Text style={styles.errorMessage}>{passwordError}</Text> : null}
                </Animatable.View>

                <View style={styles.verticalSpacer} />

                <Animatable.View animation="fadeInUp" delay={1100}>
                    <Link label="Forgot password?" />
                </Animatable.View>

                <View style={styles.verticalSpacer} />

                <Animatable.View animation="fadeInUp" delay={1300}>
                    <Button
                        label="Login"
                        onPress={handleConnexion}
                    />
                    {emptyFieldsError ? <Text style={styles.errorMessage}>{emptyFieldsError}</Text> : null}
                </Animatable.View>

                <Animatable.View animation="fadeInUp" delay={1500}>
                    <OrDivider label="or login with" />
                </Animatable.View>

                <View style={styles.socialMediaIconsWrapper}>
                    <Animatable.View animation="bounceIn" delay={2100}>
                        <TouchableOpacity>
                            <SvgXml
                                xml={ic_google}
                                width={STANDARD_SOCIAL_ICON_SIZE}
                                height={STANDARD_SOCIAL_ICON_SIZE}
                            />
                        </TouchableOpacity>
                    </Animatable.View>
                </View>

                <View style={styles.verticalSpacer} />

                <Animatable.View
                    animation="fadeInUp"
                    delay={2300}
                    style={styles.questionAndLinkWrapper}>
                    <Question question="Vous n'avez pas de compte ?" />
                    <Link
                        label="S'inscrire"
                        onPress={() => navigation.navigate("S'inscrire")}
                    />
                </Animatable.View>

            </Animatable.View>
        </View>
    );
};

export default Connexion;
