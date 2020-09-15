import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';
import colors from "../configs/colors";

const AppButton = ({ title, onPress, color = "primary" }) => {
    return (
        <TouchableOpacity style={[styles.container, { backgroundColor: colors[color] }]} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    text: {
        fontWeight: "bold",
        color: colors.text,
        fontSize: 18,
        textTransform: "uppercase"

    },
    container: {
        width: "100%",
        borderRadius: 25,
        backgroundColor: colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        marginVertical: 10,
    },
})
export default AppButton;