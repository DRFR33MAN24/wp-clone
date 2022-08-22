import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import ContactsFloatingIcon from '../Components/ContactsFloatingIcon';
import firestore from '@react-native-firebase/firestore';
import {useDispatch, useSelector} from 'react-redux';
import {setRooms, setUnfilteredRooms} from '../Reducers/chatsSlice';
const rooms = firestore().collection('rooms');
export const chatsIcon = () => {
  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <Text>C</Text>
    </View>
  );
};
export const ChatsScreenTobBar = () => {
  return (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <Text>C</Text>
      <Text>O</Text>
    </View>
  );
};
export const ChatsScreen = () => {
  const dispatch = useDispatch();
  const currUser = useSelector(state => state.auth.user);

  let query = rooms.where(
    'participantsArray',
    'array-contains',
    currUser.email,
  );
  useEffect(() => {
    query.onSnapshot(snap => {
      const parsedChats = snap.docs.map(doc => ({
        ...doc.data(),
        id: doc.id,
        userB: doc.data().participants.find(p => p.email !== currUser.email),
      }));
      dispatch(setUnfilteredRooms(parsedChats));
      dispatch(setRooms(parsedChats.filter(doc => doc.lastMessage)));
    });
  }, []);

  function getUserB(user, contacts) {
    const userContact = contacts.find(c => c.email === user.email);
    if (userContact && userContact.contactName) {
      return {...user, contactName: userContact.contactName};
    }
    return user;
  }
  return (
    <View style={{flex: 1, padding: 5, paddingRight: 10}}>
      {rooms.map(room => (
        <ListItem
          type="chat"
          description={room.lastMessage.text}
          key={room.id}
          room={room}
          time={room.lastMessage.createdAt}
          user={getUserB(room.userB, contacts)}
        />
      ))}
      <ContactsFloatingIcon />
    </View>
  );
};
