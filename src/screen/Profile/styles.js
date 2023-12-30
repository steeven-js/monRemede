import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 10,
    },
    TopNavBar: {
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    profile: {
        flex: 1,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textTopNavBar: {
        fontSize: 18,
        color: '#fff',
        fontFamily: 'Dosis-Regular',
    },
    font: {
        fontFamily: 'Dosis-Regular',
    }
});

export default styles;