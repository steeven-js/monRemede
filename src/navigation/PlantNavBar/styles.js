import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    background: {
        height: 350,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    TopNavBar: {
        padding: 10,
        position: 'absolute',
        top: 0,
        width: '100%',
    },
    TopNavBarContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        height: 50,
    },
    container: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
    },
    content: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
    },
    textTopNavBar: {
        fontSize: 18,
        color: 'white',
        fontFamily: 'Dosis-Regular',
        padding: 10,
    },
    textColor: {
        color: 'white',
    },
    tab: {
        alignItems: 'center',
        flex: 1,
        borderBottomWidth: 2,
        borderBottomColor: 'transparent',
        textAlign: 'center',
        width: '100%',
    },
    back: {
        width: 30,
        // backgroundColor: 'red',
        width: 'auto',
        padding: 10,
    },
    star: {
        width: 30,
        // backgroundColor: 'red',
        width: 30,
        width: 'auto',
        padding: 10,
    },
});

export default styles;