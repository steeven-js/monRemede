import { StyleSheet } from 'react-native';
import {
    FONT_SIZE_MD,
    FONT_SIZE_XS,
    DOSIS_REGULAR,
    DOSIS_SEMIBOLD,
    SCREEN_HEIGHT,
    SCREEN_WIDTH,
    STANDARD_FLEX,
    STANDARD_SPACING,
} from '../../config/Constants';
import { COLORS } from '../../config/Colors';

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: COLORS.primary,
        padding: 10,
    },
    TopNavBar: {
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    textTopNavBar: {
        fontSize: FONT_SIZE_MD,
        color: COLORS.primary,
        fontFamily: DOSIS_REGULAR,
    },

    mainWrapper: {
        flex: STANDARD_FLEX,
    },
    contentWrapper: {
        width: SCREEN_WIDTH,
        flex: STANDARD_FLEX,
        height: SCREEN_HEIGHT,
        padding: STANDARD_SPACING * 6,
        borderTopLeftRadius: STANDARD_SPACING * 6,
        borderTopRightRadius: STANDARD_SPACING * 6,
        justifyContent: 'flex-start',
    },
    scrollViewContentContainerStyle: {
        padding: STANDARD_SPACING * 3,
        flexGrow: 1,
        justifyContent: 'center',
    },
    profileInfoWrapper: {
        alignItems: 'center',
    },
    profileName: {
        fontFamily: DOSIS_SEMIBOLD,
        fontSize: FONT_SIZE_MD,
    },
    profileEmail: {
        fontFamily: DOSIS_REGULAR,
        fontSize: FONT_SIZE_XS,
    },
    verticalSpacer: {
        marginVertical: STANDARD_SPACING * 2,
    },
});

export default styles;