import { StyleSheet } from 'react-native';
import {
    FONT_SIZE_XS,
    DOSIS_SEMIBOLD,
    STANDARD_SPACING,
} from '../../../config/Constants';

// Creating & exporting stylesheet
export default StyleSheet.create({
    label: {
        alignSelf: 'flex-end',
        fontFamily: DOSIS_SEMIBOLD,
        fontSize: FONT_SIZE_XS,
    },
});
