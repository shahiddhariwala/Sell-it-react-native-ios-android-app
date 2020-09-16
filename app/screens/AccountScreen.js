import React from 'react';
import Screen from "../components/Screen";
import Icon from "../components/Icon";
import ListItem from '../components/ListItem';
import { StyleSheet, View, FlatList } from 'react-native';
import colors from '../configs/colors';
import ListItemSeperator from "../components/ListItemSeparator";
const menuItems = [
    {
        title: "My Listings",
        icon: {
            name: "format-list-bulleted",
            backgroundColor: colors.primary,
        }
    },
    {
        title: "My Messages",
        icon: {
            name: "email",
            backgroundColor: colors.secondary,
        }
    }
]
const AccountScreen = () => {
    return (
        <Screen style={styles.screen}>
            <View style={styles.container}>
                <ListItem title="Shahid Dhariwala" subtitle="shahid.dhariwala@gmail.com" image={require("../assets/shahid.png")} />
            </View>
            <View style={styles.container}>
                <FlatList
                    data={menuItems}
                    keyExtractor={menuItem => menuItem.title}
                    renderItem={({ item }) => <ListItem title={item.title} IconComponent={<Icon name={item.icon.name} backgroundColor={item.icon.backgroundColor} />} />} 
                    ItemSeparatorComponent={ListItemSeperator}
                    />
            </View>
            <View style={styles.container}>
                <ListItem
                    title="Log Out"
                    IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
                />
            </View>
        </Screen>
    );
}
const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    screen:{
        backgroundColor: colors.light
    }
})
export default AccountScreen;