
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		// justifyContent: 'center',
		// alignItems: 'center'
    },
    users: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    userItem: {
        backgroundColor: '#4C8DFC',
        padding: 10,
        margin: 5,
        borderRadius: 5,
        fontSize: 20,
        color: 'white'
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold'
    }
});

export default styles;
