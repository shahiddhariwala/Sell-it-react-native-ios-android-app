import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import colors from '../configs/colors';
import AppText from './AppText';

const ListItem = ({ image, title, subtitle }) => {
    return (
        <View style={styles.container}>
            <Image source={image} style={styles.image} />
            <View>
                <AppText style={styles.title}>{title}</AppText>
                <AppText style={styles.subtitle}>{subtitle}</AppText>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
    },
    image: {
        width: 70,
        height: 70,
        marginRight: 10,
        borderRadius: 50
    },
    subtitle: {
        color: colors.medium,
    },
    title: {
        fontWeight: "900",
    }
})
export default ListItem;