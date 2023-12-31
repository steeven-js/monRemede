import { StyleSheet } from 'react-native';
import {
    FONT_SIZE_XS,
    DOSIS_REGULAR,
    STANDARD_SPACING,
} from '../../../config/Constants';

// Creating & exporting stylesheet
export default StyleSheet.create({
    divider: {
        alignSelf: 'center',
        marginVertical: STANDARD_SPACING * 3,
        fontFamily: DOSIS_REGULAR,
        fontSize: FONT_SIZE_XS,
        textTransform: 'capitalize',
    },
});
