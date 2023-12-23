import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    backgroundImage: {
        height: 200,
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
});

export default styles;