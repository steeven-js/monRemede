import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    backgroundImage: {
        height: 450,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    divAboveTabs: {
        padding: 10,
        position: 'absolute',
        top: 0,
        width: '100%',
    },
    divAboveTabsContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
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
    divText: {
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
});

export default styles;