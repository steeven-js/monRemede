import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    background: {
        flex: 1,
    },
    container: {
        backgroundColor: '#f1e3c6',
        borderRadius: 10,
        borderColor: 'lightgreen',
        borderWidth: 3,
        margin: 20,
        marginTop: 30,
    },
    content: {
        paddingHorizontal: 10,
    },
    soustitre: {
        fontFamily: 'Dosis-Medium',
        color: 'black',
        textDecorationLine: 'underline',
        textAlign: 'center',
        marginVertical: 10,
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default styles;