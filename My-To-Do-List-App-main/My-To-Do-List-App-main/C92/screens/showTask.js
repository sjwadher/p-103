import React, { Component } from "react";
import {
	View,
	Text,
	StyleSheet,
	SafeAreaView,
	Platform,
	StatusBar,
	Image,
	ScrollView,
	TextInput,
	Dimensions,
	Button,
	TouchableOpacity,
	Alert
} from "react-native";

import { RFValue } from "react-native-responsive-fontsize";

import db from "../config";

export default class ShowTaskScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			Task1: "",
			Task2: "",
			Task3: "",
			Task4: "",
		};
	}


	async fetchTasks() {
		await
				db()
					.ref("/tasks/").on("value" , (data)=>{
						this.state.Task1 = data.Task1
						this.state.Task2 = data.Task2
						this.state.Task3 = data.Task3
						this.state.Task4 = data.Task4
					})
	}

	render() {

		return (
			<View style={styles.container}>
				<SafeAreaView style={styles.droidSafeArea} />
				<View style={styles.appTitle}>
					<View style={styles.appIcon}>
						<Image
							source={require("../assets/icon.png")}
							style={styles.iconImage}
						></Image>
					</View>
					<View style={styles.appTitleTextContainer}>
						<Text style={styles.appTitleText}>  </Text>
					</View>
				</View>

				<View style={styles.fieldsContainer}>
					<View>
						<Text>{this.state.Task1}</Text>
						<TouchableOpacity
							onPress={() => this.props.navigation.navigate("AddTask")}
						>
							<Ionicons name={"checkmark-done"} size={RFValue(30)} color={"white"} />
						</TouchableOpacity>

						<TouchableOpacity>
							<Ionicons name={"notification-off"} size={RFValue(30)} color={"white"} />
						</TouchableOpacity>
					</View>

					<View>
						<Text>{this.state.Task2}</Text>
						<TouchableOpacity
							onPress={() => this.props.navigation.navigate("AddTask")}
						>
							<Ionicons name={"checkmark-done"} size={RFValue(30)} color={"white"} />
						</TouchableOpacity>

						<TouchableOpacity>
							<Ionicons name={"notification-off"} size={RFValue(30)} color={"white"} />
						</TouchableOpacity>
					</View>

					<View>
						<Text>{this.state.Task3}</Text>
						<TouchableOpacity
							onPress={() => this.props.navigation.navigate("AddTask")}
						>
							<Ionicons name={"checkmark-done"} size={RFValue(30)} color={"white"} />
						</TouchableOpacity>

						<TouchableOpacity>
							<Ionicons name={"notification-off"} size={RFValue(30)} color={"white"} />
						</TouchableOpacity>
					</View>

					<View>
						<Text>{this.state.Task4}</Text>
						<TouchableOpacity
							onPress={() => this.props.navigation.navigate("AddTask")}
						>
							<Ionicons name={"checkmark-done"} size={RFValue(30)} color={"white"} />
						</TouchableOpacity>

						<TouchableOpacity>
							<Ionicons name={"notification-off"} size={RFValue(30)} color={"white"} />
						</TouchableOpacity>
					</View>

					<View style={styles.submitButton}>
						
						<TouchableOpacity
							onPress={() => this.props.navigation.navigate("Home")}
						>
							<Text style={styles.inputFont}>Go Back! </Text>
						</TouchableOpacity>
					</View>
				</View>
				<View style={{ flex: 0.08 }} />
			</View>
		);
	}

}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#15193c",
	},
	droidSafeArea: {
		marginTop:
			Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35),
	},
	appTitle: {
		flex: 0.07,
		flexDirection: "row",
	},
	appIcon: {
		flex: 0.3,
		justifyContent: "center",
		alignItems: "center",
	},
	iconImage: {
		width: "100%",
		height: "100%",
		resizeMode: "contain",
	},
	appTitleTextContainer: {
		flex: 0.7,
		justifyContent: "center",
	},
	appTitleText: {
		color: "white",
		fontSize: RFValue(28),
		fontFamily: "Bubblegum-Sans",
	},
	fieldsContainer: {
		flex: 0.85,
	},
	previewImage: {
		width: "93%",
		height: RFValue(250),
		alignSelf: "center",
		borderRadius: RFValue(10),
		marginVertical: RFValue(10),
		resizeMode: "contain",
	},
	inputFont: {
		height: RFValue(40),
		marginTop: RFValue(40),
		borderColor: "white",
		borderWidth: RFValue(1),
		borderRadius: RFValue(10),
		paddingLeft: RFValue(10),
		color: "white",
		fontFamily: "Bubblegum-Sans",
	},
	inputFontExtra: {
		marginTop: RFValue(15),
	},
	inputTextBig: {
		textAlignVertical: "top",
		padding: RFValue(5),
	},
	submitButton: {
		marginTop: RFValue(20),
		alignItems: "center",
		justifyContent: "center"
	}
});