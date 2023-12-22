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
        backgroundColor: 'rgba(30, 30, 30, 0.8)', // dark background color
        padding: 10,
    },
    symptomeName: {
        color: 'white',
        textAlign: 'center',
        fontFamily: 'Dosis-Regular',
    },
});

export default styles;