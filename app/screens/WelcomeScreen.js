import React from 'react';
import { ImageBackground, StyleSheet, View, Text, Image } from 'react-native';

const WelcomeScreen = (props) => {
    return (
        <ImageBackground
            source={require("../assets/background.jpg")}
            style={styles.background}
        >
            <View style={styles.logoContainer}>
                <Image source={require("../assets/logo-red.png")} style={styles.logo} />
                <Text>Sell What you Don't Need</Text>
            </View>
            <View style={styles.loginButton}>
                <Text>Login</Text>
            </View>
            <View style={styles.registerButton}>
                <Text>Register</Text>
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
    logo: {
        width: 100,
        height: 100,

    },
    logoContainer: {
        position: "absolute",
        top: 70,
        alignItems: "center"
    },
    loginButton: {
        width: "100%",
        height: 70,
        backgroundColor: "#fc5c65"
    },
    registerButton:
    {
        width: "100%",
        height: 70,
        backgroundColor: "#4ecdc4"
    }
})
export default WelcomeScreen;