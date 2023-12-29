import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    header: {
        flexDirection: 'column', // Ajuster la direction du dégradé
    },
    icon: {
        padding: 10,
        width: 40,
        height: 40,
    },
    TopNavBar: {
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    textTopNavBar: {
        fontSize: 18,
        color: 'white',
        fontFamily: 'Dosis-Regular',
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    tab: {
        alignItems: 'center',
        flex: 1,
        borderBottomWidth: 2,
        borderBottomColor: 'transparent',
        textAlign: 'center',
    },
    tabText: {
        paddingVertical: 10,
        fontSize: 16,
        alignItems: 'center',
        color: 'black',
    },
    activeTab1: {
        borderBottomColor: 'red',
    },
    activeTab2: {
        borderBottomColor: 'green',
    },
    activeTab3: {
        borderBottomColor: 'yellow',
    },
});

export default styles;