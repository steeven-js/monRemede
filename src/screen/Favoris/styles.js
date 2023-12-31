import { StyleSheet, Dimensions } from 'react-native';
import {
    STANDARD_FLEX,
    STANDARD_SPACING,
} from '../../config/Constants';

const { width } = Dimensions.get('window');
const numColumns = 2;
const columnWidth = width / numColumns;

const styles = StyleSheet.create({
    background: {
        flex: STANDARD_FLEX,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
    },
    container: {
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
    },
    favorite: {
        width: columnWidth - 20,
        height: columnWidth - 20,
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.6)',
        borderRadius: STANDARD_SPACING * 3,
        marginBottom: STANDARD_SPACING * 2,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        margin: STANDARD_SPACING * 2,
        borderColor: 'yellow',
        height: 150,
    },
    favoriteInfoContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        padding: STANDARD_SPACING,
    },
    favoriteName: {
        color: 'white',
        textAlign: 'center',
        fontFamily: 'Dosis-Regular',
    },
    plantImage: {
        width: '100%',
        height: '100%',
        borderRadius: 15,
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loginButtonContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
    },
    noFavorite: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    questionAndLinkWrapper: {
        flexDirection: 'row',
        alignSelf: 'center',
        paddingBottom: STANDARD_SPACING * 5,
    },
});

export default styles;