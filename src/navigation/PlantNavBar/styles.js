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
        paddingVertical: 10,
    },
    activeBar: {
        width: 50,
        height: 5,
        backgroundColor: 'white',
    },
    divText: {
        fontSize: 18,
        color: 'white',
        fontFamily: 'Dosis-Regular',
    },
});

export default styles;