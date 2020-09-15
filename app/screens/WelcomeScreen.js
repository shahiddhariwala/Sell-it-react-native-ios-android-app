import React from 'react';
import { ImageBackground, StyleSheet, View, Text, Image } from 'react-native';
import AppButton from "../components/Button";

const WelcomeScreen = (props) => {
    return (
        <ImageBackground
            source={require("../assets/background.jpg")}
            style={styles.background}
            blurRadius={1}
        >
            <View style={styles.logoContainer}>
                <Image source={require("../assets/logo-red.png")} style={styles.logo} />
                <Text>Sell What you Don't Need</Text>
            </View>
            <View style={styles.buttonContainer}>
                <AppButton title="Login" onPress={()=> console.log("Login Clicked")}/>
                <AppButton title="Register" color="secondary" onPress={()=> console.log("Register Clicked")}/>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background:
    {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center"
    },
    buttonContainer:{
        padding: 20,
        width:"100%",
    },
    logo: {
        width: 100,
        height: 100,

    },
    logoContainer: {
        position: "absolute",
        top: 70,
        alignItems: "center"
    },
})
export default WelcomeScreen;