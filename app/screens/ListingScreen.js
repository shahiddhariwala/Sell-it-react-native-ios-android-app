import React from 'react';

import { FlatList, StyleSheet } from 'react-native';
import Screen from "../components/Screen";
import Card from "../components/Card";
import colors from "../configs/colors";
import ListItemSeparator from "../components/ListItemSeparator";

const initiialListing = [
    {
        id: 1,
        name: "Red Jacket for Sale",
        price: 100,
        image: require("../assets/jacket.jpg")
    },
    {
        id: 2,
        name: "Couch for Sale",
        price: 100,
        image: require("../assets/couch.jpg")
    },
    {
        id: 3,
        name: "Chair for Sale",
        price: 500,
        image: require("../assets/chair.jpg")
    },

]
const ListingScreen = () => {
    return (
        <Screen style={styles.screen}>
            <FlatList
                data={initiialListing}
                keyExtractor={listing => listing.id.toString()}
                renderItem={({ item }) => <Card title={item.name} subTitle={item.price} image={item.image} />}
                ItemSeparatorComponent={ListItemSeparator}
            />
        </Screen>
    );
}
const styles = StyleSheet.create({
    screen: {
        padding: 10,
        backgroundColor: colors.light,
    }
})
export default ListingScreen;