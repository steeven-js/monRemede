import { StyleSheet } from 'react-native';
import {
    STANDARD_FLEX,
    STANDARD_LOGO_HEIGHT,
    STANDARD_LOGO_WIDTH,
} from '../../config/Constants';

// Creating & storing stylesheet
export default StyleSheet.create({
    imageBackground: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: 177.5,
        height: 217.5,
    },
});
