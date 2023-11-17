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
    TouchableOpacity,
    Button,
    Alert
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import db from "../config";

import * as SplashScreen from 'expo-splash-screen';
SplashScreen.preventAutoHideAsync();

export default class AddTaskScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Task1: "",
            Task2: "",
            Task3: "",
            Task4: "",
            name: ""
        };
    }

    fetchName() {
        db.ref("/name").on("value", (n) => {
            this.state.name = n
        })
    }

    addTasks() {
        if (this.state.Task1 && this.state.Task2 && this.state.Task3 && this.state.Task4) {
            db
                .ref("/tasks/" + this.state.name + "/")
                .set({
                    'Task1': this.state.Task1,
                    'Task2': this.state.Task2,
                    'Task3': this.state.Task3,
                    'Task4': this.state.Task4,
                })
                .then(function () {
                    this.props.navigation.navigate("ShowTask")
                })

        } else {
            Alert.alert(
                'Error',
                'All fields are required!',
                [
                    { text: 'OK', onPress: () => console.log('OK Pressed') }
                ],
                { cancelable: false }
            );
        }
    }

    render() {
        SplashScreen.hideAsync();

        return (
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea} />
                <View style={styles.appTitle}>
                    <View style={styles.appIcon}>
                        <Image
                            source={require("../assets/logo.png")}
                            style={styles.iconImage}
                        ></Image>
                    </View>
                    <View style={styles.appTitleTextContainer}>
                        <Text style={styles.appTitleText}>  </Text>
                    </View>
                </View>

                <View style={styles.fieldsContainer}>
                    <ScrollView>
                        <TextInput
                            style={[
                                styles.inputFont,
                                styles.inputFontExtra,
                                styles.inputTextBig,
                            ]}
                            onChangeText={(t1) => this.setState({ Task1: t1 })}
                            placeholder={"Add Task 1"}
                            placeholderTextColor="white"
                            multiline={true}
                            numberOfLines={4}
                        />

                        <TextInput
                            style={[
                                styles.inputFont,
                                styles.inputFontExtra,
                                styles.inputTextBig,
                            ]}
                            onChangeText={(t2) => this.setState({ Task2: t2 })}
                            placeholder={"Add Task 2"}
                            multiline={true}
                            numberOfLines={4}
                            placeholderTextColor="white"
                        />
                        <TextInput
                            style={[
                                styles.inputFont,
                                styles.inputFontExtra,
                                styles.inputTextBig,
                            ]}
                            onChangeText={(t3) => this.setState({ Task3: t3 })}
                            placeholder={"Add Task 3"}
                            multiline={true}
                            numberOfLines={20}
                            placeholderTextColor="white"
                        />

                        <TextInput
                            style={[
                                styles.inputFont,
                                styles.inputFontExtra,
                                styles.inputTextBig,
                            ]}
                            onChangeText={(t4) => this.setState({ Task4: t4 })}
                            placeholder={"Add Task 4"}
                            multiline={true}
                            numberOfLines={4}
                            placeholderTextColor="white"
                        />

                        <View style={styles.submitButton}>
                            <Text style={[styles.inputFont, { marginTop: 50 }]}> You can add only 4 Tasks at a time. You can add more tasks by finishing them and marking them complete </Text>
                            <Button
                                onPress={() => {
                                    this.fetchName()
                                    this.addTasks()
                                }}
                                title="Done"
                                color="#841584"
                            />
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate("ShowTask")}
                            >
                                <Text style={styles.inputFont}> View Tasks </Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
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