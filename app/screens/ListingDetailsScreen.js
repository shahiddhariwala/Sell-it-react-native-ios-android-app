import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import AppText from "../components/AppText";
import colors from '../configs/colors';
import ListItem from "../components/ListItem";

const ListingDetailScreen = () => {
    return (
        <View>
            <Image source={require("../assets/jacket.jpg")} style={styles.image} />
            <View style={styles.detailsContainer}>
                <AppText style={styles.title}>
                    Red Jacket for Sale
            </AppText>
                <AppText style={styles.price}>
                    $100
            </AppText>
                <View style={styles.userContainer}>
                </View>
                <ListItem image={require("../assets/shahid.png")} title="Shahid Dhariwala" subtitle="5 Listings" />
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: 300,
    },
    detailsContainer: {
        padding: 20,
    },
    price: {
        color: colors.secondary,
        fontSize: 20,
        fontWeight: "bold",
        marginVertical: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: "900",
    },
    userContainer: {
        marginVertical: 20,
    }
})
export default ListingDetailScreen;