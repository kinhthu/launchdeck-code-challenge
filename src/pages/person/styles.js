
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		// justifyContent: 'center',
		// alignItems: 'center'
	},
	userInfo: {
		flexDirection: 'row',
		margin: 10,
	},
	nameStyle: {
		flexDirection: 'column',
		marginLeft: 10,
		borderBottomWidth: 1,
		borderColor: 'gray'
	},
	avatar: {
		width: 50,
		height: 50,
		borderRadius: 25
	},
	usernameStyle: {
		fontSize: 20,
	},
	locationStyle: {
		fontSize: 15,
		color: 'gray'
	}
});

export default styles;
