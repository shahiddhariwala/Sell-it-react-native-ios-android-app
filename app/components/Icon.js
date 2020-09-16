import React from 'react';
import { View } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Icon = ({ size = 40, name, backgroundColor = "#000", iconColor = "#fff" }) => {
    return (
        <View style={{
            borderRadius: size / 2,
            width: size,
            height: size,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor
        }}>
            <MaterialCommunityIcons name={name} color={iconColor} size={size * 0.5} />
        </View>
    );
}

export default Icon;