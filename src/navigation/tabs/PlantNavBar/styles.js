import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    backgroundImage: {
        height: 300,
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
    touchableOpacity: {
        padding: 10,
        width: '20%',
        alignItems: 'center',

    },
    icon: {
        padding: 10,
        width: 25,
        height: 25,
    },
});

export default styles;