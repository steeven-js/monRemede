import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'react-native-linear-gradient';
import MenuIcon from 'react-native-vector-icons/Ionicons';
import auth from '@react-native-firebase/auth';

// Custom components
import Button from '../../components/buttons/Button';
import CustomTextInput from '../../components/inputs/TextInput';
import PasswordTextInput from '../../components/inputs/PasswordTextInput';
import ic_facebook from '../../assets/icons/svg/ic_facebook';
import ic_twitter from '../../assets/icons/svg/ic_twitter';
import ic_google from '../../assets/icons/svg/ic_google';

// Styles and configurations
import { COLORS } from '../../config/Colors';
import styles from './styles';
import * as Animatable from 'react-native-animatable';
import {
    STANDARD_SOCIAL_ICON_SIZE,
    STANDARD_VECTOR_ICON_SIZE,
} from '../../config/Constants';

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
        <View style={[styles.mainWrapper, { backgroundColor: COLORS.primary }]}>
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

            {/* Form wrapper */}
            <Animatable.View
                animation="fadeInUp"
                delay={100}
                style={[styles.formWrapper, { backgroundColor: COLORS.primary }]}>

                {/* Screen info component */}
                <Animatable.View animation="fadeInUp" delay={500}>
                    <ScreenInfo info="Bonjour, veuillez fournir vos informations d'identification pour accéder à votre compte." />
                </Animatable.View>

                {/* Vertical spacer */}
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
                </Animatable.View>

                {/* Vertical spacer */}
                <View style={styles.verticalSpacer} />

                <Animatable.View animation="fadeInUp" delay={900}>
                    <PasswordTextInput
                        label="Password"
                        placeholder="Mot de passe"
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                        afficherMotDePasse={afficherMotDePasse}
                        setAfficherMotDePasse={setAfficherMotDePasse}
                    />
                </Animatable.View>

                {/* Vertical spacer */}
                <View style={styles.verticalSpacer} />

                {/* Link component */}
                <Animatable.View animation="fadeInUp" delay={1100}>
                    <Link label="Forgot password?" />
                </Animatable.View>

                {/* Vertical spacer */}
                <View style={styles.verticalSpacer} />

                {/* Button component */}
                <Animatable.View animation="fadeInUp" delay={1300}>
                    <Button
                        label="Login"
                        onPress={() => { handleConnexion() }}
                    />
                </Animatable.View>

                {/* Or divider component */}
                <Animatable.View animation="fadeInUp" delay={1500}>
                    <OrDivider label="or login with" />
                </Animatable.View>

                {/* Social media icons wrapper */}
                <View style={styles.socialMediaIconsWrapper}>
                    <Animatable.View animation="bounceIn" delay={1700}>
                        <TouchableOpacity>
                            <SvgXml
                                xml={ic_facebook}
                                width={STANDARD_SOCIAL_ICON_SIZE}
                                height={STANDARD_SOCIAL_ICON_SIZE}
                            />
                        </TouchableOpacity>
                    </Animatable.View>

                    <Animatable.View animation="bounceIn" delay={1900}>
                        <TouchableOpacity>
                            <SvgXml
                                xml={ic_twitter}
                                width={STANDARD_SOCIAL_ICON_SIZE}
                                height={STANDARD_SOCIAL_ICON_SIZE}
                            />
                        </TouchableOpacity>
                    </Animatable.View>

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

                {/* Vertical spacer */}
                <View style={styles.verticalSpacer} />

                <Animatable.View
                    animation="fadeInUp"
                    delay={2300}
                    style={styles.questionAndLinkWrapper}>
                    {/* Question component */}
                    <Question question="Vous n'avez pas de compte ?" />

                    {/* Link component */}
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
