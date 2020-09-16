import React from 'react';
import { View, Image, StyleSheet, TouchableHighlight } from 'react-native';
import colors from '../configs/colors';
import AppText from './AppText';
import Swipeable from "react-native-gesture-handler/Swipeable";
const ListItem = ({ image, title, subtitle, onPress, IconComponent, renderRightActions }) => {
    return (
        <Swipeable renderRightActions={renderRightActions}>
            <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
                <View style={styles.container}>
                    {IconComponent}
                    {image && <Image source={image} style={styles.image} />}
                    <View style={styles.detailsContainer}>
                        <AppText style={styles.title}>{title}</AppText>
                        {subtitle && <AppText style={styles.subtitle}>{subtitle}</AppText>}
                    </View>
                </View>
            </TouchableHighlight>
        </Swipeable>
    );
}
const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        padding: 15,
        backgroundColor: colors.white
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
    },
    detailsContainer: {
        marginLeft: 10,
        justifyContent: "center",

    }
})
export default ListItem;