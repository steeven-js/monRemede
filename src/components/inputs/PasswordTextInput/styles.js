import { StyleSheet } from 'react-native';
import {
    FONT_SIZE_XS,
    DOSIS_REGULAR,
    DOSIS_SEMIBOLD,
    STANDARD_BORDER_RADIUS,
    STANDARD_BORDER_WIDTH,
    STANDARD_SPACING,
    STANDARD_TEXT_INPUT_HEIGHT,
} from '../../../config/Constants';

// Creating & exporting stylesheet
export default StyleSheet.create({
    textInputLabel: {
        fontFamily: DOSIS_SEMIBOLD,
        fontSize: FONT_SIZE_XS,
        marginBottom: STANDARD_SPACING * 1.5,
    },
    textInput: {
        height: STANDARD_TEXT_INPUT_HEIGHT,
        paddingHorizontal: STANDARD_SPACING * 3,
        borderWidth: STANDARD_BORDER_WIDTH,
        borderRadius: STANDARD_BORDER_RADIUS,
        fontSize: FONT_SIZE_XS,
        fontFamily: DOSIS_REGULAR,
    },
});
