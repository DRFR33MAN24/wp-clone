import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native'

export const profileIcon = () => {
    return (
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Text>P</Text>
        </View>
    )
}
export const ProfileScreenTopBar = () => {
    return (
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text>C</Text>
            <Text>O</Text>

        </View>
    )
}
export const ProfileScreen = () => {
    return (
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Text>Profile Screen</Text>
        </View>
    )
}