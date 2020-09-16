import React from 'react';
import { View, Image, StyleSheet, TouchableHighlight } from 'react-native';
import colors from '../configs/colors';
import AppText from './AppText';
import Swipeable from "react-native-gesture-handler/Swipeable";
const ListItem = ({ image, title, subtitle, onPress, renderRightActions }) => {
    return (
        <Swipeable renderRightActions={renderRightActions}>
            <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
                <View style={styles.container}>
                    <Image source={image} style={styles.image} />
                    <View>
                        <AppText style={styles.title}>{title}</AppText>
                        <AppText style={styles.subtitle}>{subtitle}</AppText>
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