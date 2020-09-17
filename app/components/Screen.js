import React from 'react';
import { StyleSheet, SafeAreaView, Platform, StatusBar, View } from 'react-native';

const Screen = ({ children, style }) => {
    return (
        <SafeAreaView style={[styles.screen, style]}>
            <View style={style}>
                {children}
            </View>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    screen: {
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        flex: 1,
    }
})
export default Screen;