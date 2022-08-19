import React, { useState, useEffect } from 'react';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { StyleSheet, Text } from 'react-native';
//import { NotificationScreen } from './NotificationScreen';

import { ChatsScreen, ChatsScreenTobBar, chatsIcon } from './ChatsScreen';
import { ContactsScreen, contactsIcon, ContactsScreenTobBar } from './ContactsScreen';
import { ProfileScreen, profileIcon, ProfileScreenTopBar } from './ProfileScreen';
import { ChatScreen } from './ChatScreen';
import AuthScreen from './AuthScreen';
import { useDispatch, useSelector } from 'react-redux';
import { loadUser, reloadUser, setDeviceToken, setUser } from '../Reducers/authSlice';
import { Notifications } from 'react-native-notifications';
import auth from '@react-native-firebase/auth';
import { ContactScreen } from './ContactScreen';
import { palette } from '../config';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
    faUser,

} from '@fortawesome/free-solid-svg-icons';
const { Navigator, Screen } = createMaterialTopTabNavigator();
const Stack = createNativeStackNavigator();
// const BottomTabBar = ({ navigation, state }) => (
//     <BottomNavigation
//         selectedIndex={state.index}
//         onSelect={index => navigation.navigate(state.routeNames[index])}>
//         <BottomNavigationTab title="Chats" icon={chatsIcon} />
//         <BottomNavigationTab title="Contacts" icon={contactsIcon} />
//         <BottomNavigationTab title="Profile" icon={profileIcon} />
//     </BottomNavigation>
// );

const StackNavigatorChats = () => (
    <Stack.Navigator
        screenOptions={{
            headerStyle: {
                backgroundColor: "red",
                shadowOpacity: 0,
                elevation: 0,
            },
            headerTintColor: "green",
        }}
    >
        <Stack.Screen
            name="ChatsScreen"
            component={ChatsScreen}
            options={{
                headerShown: false,

            }}
        />

        <Stack.Screen
            name="Chat"
            component={ChatScreen}
            options={{ headerShown: false }}
        />
    </Stack.Navigator>
);
const StackNavigatorContacts = () => (
    <Stack.Navigator
        screenOptions={{
            headerStyle: {
                backgroundColor: "red",
                shadowOpacity: 0,
                elevation: 0,
            },
            headerTintColor: "green",
        }}
    >
        <Stack.Screen
            name="ContactsScreen"
            component={ContactsScreen}
            options={{ headerShown: false }}
        />

        <Stack.Screen
            name="Contact"
            component={ContactScreen}
            options={{ headerShown: false }}
        />
    </Stack.Navigator>
);
const TabNavigator = () => (
    <Navigator
        screenOptions={({ route }) => {
            return {
                tabBarLabel: () => {
                    if (route.name === "photo") {
                        return <FontAwesomeIcon icon={faUser} size={25} style={{ color: palette.white }} />
                    } else {
                        return (
                            <Text style={{ color: palette.white }}>
                                {route.name.toLocaleUpperCase()}
                            </Text>
                        );
                    }
                },
                tabBarShowIcon: true,
                tabBarLabelStyle: {
                    color: palette.white,
                },
                tabBarIndicatorStyle: {
                    backgroundColor: palette.white,
                },
                tabBarStyle: {
                    backgroundColor: palette.tealGreenDark,
                },
            };
        }}


    >
        <Screen
            name="Chats"
            component={StackNavigatorChats}
            options={{ title: "Whatsapp" }}
        />
        <Screen
            name="Contacts"
            // options={{headerRight: props => <HomeScreenTopBar {...props} />}}
            component={StackNavigatorContacts}
            options={{ title: "Select Contacts" }}
        />
        <Screen
            name="Profile"
            // options={{headerRight: props => <HomeScreenTopBar {...props} />}}
            component={ProfileScreen}
            options={{
                headerShown: false,

            }}
        />
        {/* <Screen name="Settings" component={SettingsScreen} /> */}
    </Navigator>
);

export const AppNavigator = () => {
    const authState = useSelector(state => state.auth);
    const dispatch = useDispatch();
    useEffect(() => {



        // Notifications.registerRemoteNotifications();

        // Notifications.events().registerRemoteNotificationsRegistered(event => {


        //     dispatch(setDeviceToken(event.deviceToken));
        //     dispatch(reloadUser(event.deviceToken));
        // });
        // Notifications.events().registerRemoteNotificationsRegistrationFailed(
        //     event => {
        //         dispatch(setDeviceToken(''));
        //     },
        // );

        // Notifications.events().registerNotificationReceivedForeground(
        //     (notification, completion) => {
        //         console.log(
        //             `Notification received in foreground: ${notification.title} : ${notification.body}`,
        //         );
        //         completion({ alert: false, sound: false, badge: false });
        //     },
        // );

        // Notifications.events().registerNotificationOpened(
        //     (notification, completion) => {
        //         console.log(`Notification opened: ${notification.payload}`);
        //         completion();
        //     },
        // );

        const unsubscribe = auth().onAuthStateChanged(user => {
            const userDetails = { email: user.email, uid: user.uid, photoUrl: user.photoURL }
            dispatch(setUser(userDetails));
        });

        return () => unsubscribe();
    }, []);

    if (authState.user === undefined) {
        return <></>;
    }
    if (authState.user?.uid) {
        return (
            <NavigationContainer>
                <TabNavigator />
            </NavigationContainer>
        );
    }

    return <AuthScreen />;
};

const styles = StyleSheet.create({
    icon: {
        width: 32,
        height: 32,
    },
    container: {
        flex: 1,
        flexDirection: 'row',
    },
    layout: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});