import { StyleSheet } from 'react-native';
import {
    FONT_SIZE_SM,
    DOSIS_REGULAR,
    STANDARD_SPACING,
    STANDARD_VECTOR_ICON_WRAPPER_SIZE,
} from '../../../config/Constants';

// Creating & exporting stylesheet
export default StyleSheet.create({
    link: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    linkIconAndLabelWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    linkIconWrapper: {
        width: STANDARD_VECTOR_ICON_WRAPPER_SIZE,
        aspectRatio: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: STANDARD_VECTOR_ICON_WRAPPER_SIZE * 0.5,
        marginEnd: STANDARD_SPACING * 3,
    },
    linkLabel: {
        fontFamily: DOSIS_REGULAR,
        fontSize: FONT_SIZE_SM,
    },
});
