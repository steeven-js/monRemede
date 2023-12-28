import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    background: {
        flex: 1,
    },
    container: {
        backgroundColor: '#f1e3c6',
        borderRadius: 10,
        borderColor: 'orange',
        borderWidth: 3,
        margin: 20,
        marginTop: 30,
    },
    content: {
        padding: 10,
    },
    title: {
        fontFamily: 'Dosis-Medium',
        color: 'black',
        fontSize: 15,
        textAlign: 'center',
    },
    soustitre: {
        fontFamily: 'Dosis-Medium',
        color: 'black',
        textAlign: 'center',
        marginTop: 10,
        paddingBottom: 5,
    },
    borderBottom: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default styles;