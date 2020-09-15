import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import colors from "../configs/colors";
import AppText from "./AppText";

const Card = ({ title, subTitle, image }) => {
    return (
        <View style={styles.card}>
            <Image source={image} style={styles.image} />
            <View style={styles.detailContainer}>
                <AppText style={styles.title}>
                    {title}
                </AppText>
                <AppText style={styles.subtitle}>
                    {subTitle}
                </AppText>
            </View>
        </View>);
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 15,
        backgroundColor: colors.white,
        borderRadius: 20,
        overflow: "hidden"
    },
    detailContainer: {
        padding: 20,
    },
    image: {
        width: "100%",
        height: 200,
    },
    title:{
        marginBottom: 7,
    },
    subtitle:{
        color: colors.secondary,
        fontWeight: "bold",
    }
})

export default Card;