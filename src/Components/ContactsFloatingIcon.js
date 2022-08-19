import React, { useContext } from "react";
import { TouchableOpacity } from "react-native";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
    faMessage,

} from '@fortawesome/free-solid-svg-icons';
import { palette } from "../config";
import { useNavigation } from "@react-navigation/native";
export default function ContactsFloatingIcon() {

    const navigation = useNavigation();
    return (
        <TouchableOpacity
            onPress={() => navigation.navigate("contacts")}
            style={{
                position: "absolute",
                right: 20,
                bottom: 20,
                borderRadius: 60,
                width: 60,
                height: 60,
                backgroundColor: palette.green,
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <FontAwesomeIcon icon={faMessage} size={25} style={{ color: "white" }} />
        </TouchableOpacity>
    );
}