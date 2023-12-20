import styles from './styles';
import { ImageBackground } from 'react-native';
import * as Animatable from 'react-native-animatable';

// Functional components
const Splash = () => {
    // Returning
    return (
        <ImageBackground
            source={require('../../assets/images/backgrounds/splash_bg.png')}
            style={styles.imageBackground}>
            <Animatable.Image
                animation="fadeInUp"
                delay={100}
                source={require('../../assets/images/logos/logo_dark.png')}
                style={styles.logo}
            />
        </ImageBackground>
    );
};

// Exporting
export default Splash;
