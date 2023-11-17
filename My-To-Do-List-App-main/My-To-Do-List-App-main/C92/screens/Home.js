import React, { Component } from 'react';
import {
	View,
	StyleSheet,
	ImageBackground,
	Image,
	TextInput,
	TouchableOpacity,
	Text,
	Alert,
	KeyboardAvoidingView,
} from 'react-native';

import db from '../config';

const bgImage = require('../assets/bg.jpg');
const appIcon = require('../assets/logo.png');

export default class HomeScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
		};
	}

	updateDb=(n)=>{
		db.ref("/").set({
			'name' : n
		})
	}

	render() {
		const { name } = this.state;
		return (
			<KeyboardAvoidingView behavior='padding' style={styles.container}>
				<ImageBackground source={bgImage} style={styles.bgImage}>

					<View style={styles.upperContainer}>
						<Image source={appIcon} style={styles.appIcon} />
						<Text style={styles.appName} > Tooooo Doooooo List </Text>
					</View>

					<View style={styles.lowerContainer}>
						<TextInput
							style={styles.textinput}
							onChangeText={(text) => this.setState({ name: text })}
							placeholder={'Enter Your Name'}
							placeholderTextColor={'#FFFFFF'}
							autoFocus
						/>

						<TouchableOpacity
							style={[styles.button, { marginTop: 20 }]}
							onPress={() => {
								this.updateDb(this.state.name)
								this.props.navigation.navigate("BottomTab")
							}
							}
						>
							<Text style={styles.buttonText}>Now Go & Add Your Tasks</Text>
						</TouchableOpacity>
					</View>
				</ImageBackground>
			</KeyboardAvoidingView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#FFFFFF',
	},
	bgImage: {
		flex: 1,
		resizeMode: 'cover',
		justifyContent: 'center',
	},

	upperContainer: {
		flex: 0.5,
		justifyContent: 'center',
		alignItems: 'center',
	},
	appIcon: {
		width: 280,
		height: 280,
		resizeMode: 'contain',
		marginTop: 80,
	},
	appName: {
		fontSize: 30,
		color: '#00008B',
		fontFamily: 'Rajdhani_600SemiBold',
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 60
	},
	lowerContainer: {
		flex: 0.5,
		alignItems: 'center',
	},
	textinput: {
		width: '75%',
		height: 55,
		padding: 10,
		borderColor: '#FFFFFF',
		borderWidth: 4,
		borderRadius: 10,
		fontSize: 18,
		color: '#FFFFFF',
		fontFamily: 'Rajdhani_600SemiBold',
		backgroundColor: '#5653D4',
	},
	button: {
		width: '43%',
		height: 55,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F48D20',
		borderRadius: 15,
	},
	buttonText: {
		fontSize: 24,
		color: '#FFFFFF',
		fontFamily: 'Rajdhani_600SemiBold',
	},
});