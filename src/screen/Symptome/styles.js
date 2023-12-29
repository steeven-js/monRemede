import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.6)', // semi-transparent dark color
        padding: 10,
    },
    symptomeItem: {
        marginBottom: 10,
        borderRadius: 5,
        overflow: 'hidden',
        backgroundColor: 'rgba(30, 30, 30, 0.6)', // dark background color
        padding: 10,
    },
    symptomeName: {
        color: 'white',
        textAlign: 'center',
        fontFamily: 'Dosis-Regular',
        marginLeft: 10,
    },
    icon: {
        padding: 10,
        width: 40,
        height: 40,
    },
    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    left: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    right: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    errorContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default styles;