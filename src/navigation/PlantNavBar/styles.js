import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    backgroundImage: {
        height: 300,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    navBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
        height: 60,
        elevation: 3,
        paddingHorizontal: 15,
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
    icon: {
        padding: 10,
        width: 50,
        height: 50,
    },
});

export default styles;