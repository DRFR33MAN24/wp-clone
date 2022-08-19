import { useEffect, useState } from "react";
import Contacts from 'react-native-contacts';
import { PermissionsAndroid } from 'react-native';

export default function useContacts() {
    const [contacts, setContacts] = useState([]);
    useEffect(() => {
        (async () => {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
                {
                    'title': 'Contacts',
                    'message': 'This app would like to view your contacts.',
                    'buttonPositive': 'Please accept bare mortal'
                }
            );
            if (granted) {
                const contacts = await Contacts.getAll();

            }
            const { status } = await Contacts.requestPermissionsAsync();
            // if (status === "granted") {
            //     const { data } = await Contacts.getContactsAsync({
            //         fields: [Contacts.Fields.Emails],
            //     });
            //     if (data.length > 0) {
            //         setContacts(
            //             data
            //                 .filter(
            //                     (c) =>
            //                         c.firstName && c.emails && c.emails[0] && c.emails[0].email
            //                 )
            //                 .map(mapContactToUser)
            //         );
            //     }
            // }
        })();
    }, []);
    return contacts
}
function mapContactToUser(contact) {
    return {
        contactName:
            contact.firstName && contact.lastName
                ? `${contact.firstName} ${contact.lastName}`
                : contact.firstName,
        email: contact.emails[0].email,
    };
}