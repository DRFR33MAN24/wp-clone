import firestore from '@react-native-firebase/firestore';
import { useRoute } from "@react-navigation/native";
import React, { useContext, useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";
import ListItem from "../components/ListItem";
import { useDispatch, useSelector } from 'react-redux';
import { setRooms, setUnfilteredRooms } from '../Reducers/chatsSlice';
import useContacts from "../hooks/useHooks";
const users = firestore().collection('users');
export const contactsIcon = () => {
    return (
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Text>C</Text>
        </View>
    )
}
export const ContactsScreenTobBar = () => {
    return (
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text>C</Text>
            <Text>O</Text>

        </View>
    )
}
export const ContactsScreen = () => {
    const contacts = useContacts();
    const route = useRoute();
    const image = route.params && route.params.image;
    return (
        <FlatList
            style={{ flex: 1, padding: 10 }}
            data={contacts}
            keyExtractor={(_, i) => i}
            renderItem={({ item }) => <ContactPreview contact={item} image={image} />}
        />
    );
}

function ContactPreview({ contact, image }) {

    const [user, setUser] = useState(contact);
    const { unfilteredRooms, rooms } = useSelector(state => state.chats);
    useEffect(() => {
        let query = users.where("email", "==", contact.email);
        query.onSnapshot(snap => {

            if (snap.docs.length) {
                const userDoc = snap.docs[0].data();
                setUser((prevUser) => ({ ...prevUser, userDoc }));
            }
        })

    }, []);
    return (
        <ListItem
            style={{ marginTop: 7 }}
            type="contacts"
            user={user}
            image={image}
            room={unfilteredRooms.find((room) =>
                room.participantsArray.includes(contact.email)
            )}
        />
    );
}