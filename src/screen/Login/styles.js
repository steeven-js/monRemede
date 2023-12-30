import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    login: {
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 10,
    },
    icon: {
        padding: 10,
        width: 30,
        height: 30,
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

    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 8,
    },
});

export default styles;