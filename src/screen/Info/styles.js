import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    background: {
        flex: 1,
        // backgroundColor: 'rgba(0, 0, 0, 0.4)', // couleur noire semi-transparente
    },
    container: {
        backgroundColor: '#f1e3c6',
        borderRadius: 10,
        borderColor: 'lightblue',
        borderWidth: 3,
        margin: 20,
        marginTop: 30,
    },
    content: {
        paddingHorizontal: 10,
    },
    section: {
        paddingHorizontal: 10,
    },
    borderBottom: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        paddingVertical: 10,
    },
    title: {
        fontFamily: 'Dosis-Medium',
        color: 'black',
        fontSize: 15,
        textAlign: 'center',
        marginTop: 10,
    },
    soustitre: {
        fontFamily: 'Dosis-Medium',
        color: 'black',
        textDecorationLine: 'underline',
        textAlign: 'center',
        marginBottom: 10,
    },
    bold: {
        fontFamily: 'Dosis-Medium',
        color: 'black',
    },
});

export default styles;