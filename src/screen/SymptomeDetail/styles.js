import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const numColumns = 2;
const columnWidth = width / numColumns;

const styles = StyleSheet.create({
    TopNavBar: {
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    textTopNavBar: {
        fontSize: 18,
        color: 'white',
        fontFamily: 'Dosis-Regular',
    },
    background: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    spacing: {
        color: 'white',
        height: 150,
    },
    favorite: {
        width: columnWidth - 20,
        height: columnWidth - 20,
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.6)',
        borderRadius: 15,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        margin: 10,
        borderColor: 'white',
    },
    favoriteInfoContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        padding: 5,
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
});

export default styles;