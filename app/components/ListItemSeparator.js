import React from 'react';
import { View, StyleSheet } from 'react-native';
import colors from "../configs/colors";

const ListItemSeparator = () => {
    return (
        <View style={styles.seperator}></View>
    );
}
const styles = StyleSheet.create({
    separator: {
        width: "100%",
        height: 1,
        backgroundColor: colors.light,
        marginTop: 5,
    }
})
export default ListItemSeparator;