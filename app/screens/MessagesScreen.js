import React, { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import ListItem from "../components/ListItem";
import ListItemSeparator from '../components/ListItemSeparator';
import Screen from "../components/Screen";
import ListItemDeleteAction from "../components/ListItemDeleteAction"
const InitialMessages = [
    {
        id: 1,
        title: 'T1',
        description: 'D1',
        image: require("../assets/shahid.png")
    },
    {
        id: 2,
        title: 'T2',
        description: 'D2',
        image: require("../assets/shahid.png")
    },
    {
        id: 3,
        title: 'T3',
        description: 'D3',
        image: require("../assets/shahid.png")
    },
]
const MessagesScreen = () => {
    const [messages, setMessages] = useState(InitialMessages);
    const [refreshing, setRefreshing] = useState(false);

    const handleDelete = (message) => {
        //Delete the messages from Messages Array
        setMessages(messages => messages.filter(msg => msg.id !== message.id));
        console.log("Delete Sucess", message);
    }
    return (
        <Screen >
            <FlatList
                data={messages}
                keyExtractor={message => message.id.toString()}
                renderItem={({ item }) =>
                    <ListItem
                        title={item.title}
                        subtitle={item.description}
                        image={item.image}
                        onPress={() => console.log("Message Selected")}
                        renderRightActions={() => <ListItemDeleteAction onPress={() => handleDelete(item)} />} />
                }
                ItemSeparatorComponent={ListItemSeparator}
                refreshing={refreshing}
                onRefresh={()=>{
                    setMessages([
                        {
                            id: 3,
                            title: 'T3',
                            description: 'D3',
                            image: require("../assets/shahid.png")
                        },
                    ]);
                }}
            />
        </Screen>
    );
}

const styles = StyleSheet.create({

})
export default MessagesScreen;