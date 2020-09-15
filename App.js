import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

//Screens
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
//Components
import Card from "./app/components/Card";

export default function App() {
  console.log("My App Is Running");
  return (

    // <WelcomeScreen />
    // <ViewImageScreen />
    // <Card title="Red jacket for sale!" subTitle="$100" image={require("./app/assets/jacket.jpg")} />
    // <ListingDetailsScreen />
    <MessagesScreen />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'dodgerblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
