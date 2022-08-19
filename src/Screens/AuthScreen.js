import React, { useState } from "react";
import { View, Text, Image, TextInput, Button, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from 'react-redux';
import { login, register } from '../Reducers/authSlice';

export default function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [mode, setMode] = useState("signUp");
    const dispatch = useDispatch();

    async function handlePress() {
        if (mode === "signUp") {
            dispatch(register({ email: email, password: password }))
        }
        if (mode === "signIn") {
            dispatch(login({ email: email, password: password }))
        }
    }
    return (
        <View
            className="bg-white"
            style={{
                justifyContent: "center",
                alignItems: "center",
                flex: 1,
            }}
        >
            <Text
                className="text-foreground text-lg mb-4"
            >
                Welcome to Whatsapp
            </Text>
            <Image
                source={require("../assets/welcome-img.png")}
                style={{ width: 180, height: 180 }}
                resizeMode="cover"
            />
            <View >
                <TextInput
                    placeholder="Email"
                    value={email}
                    onChangeText={setEmail}
                    className="border-b-primary border-b-2 w-52 text-text"
                />
                <TextInput
                    placeholder="Password"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry={true}
                    className="border-b-primary border-b-2 w-52 mt-5 text-text"
                />
                <View className="mt-5">
                    <TouchableOpacity
                        disabled={!password || !email}
                        onPress={handlePress}
                        className="bg-secondary p-4"
                    >
                        <Text
                            className="text-center"
                        >
                            {mode === "signUp" ? "Sign Up" : "Sign in"}
                        </Text>
                    </TouchableOpacity>

                </View>
                <TouchableOpacity

                    onPress={() =>
                        mode === "signUp" ? setMode("signIn") : setMode("signUp")
                    }
                >
                    <Text
                        className="text-secondary mt-4"
                    >
                        {mode === "signUp"
                            ? "Already have an account? Sign in"
                            : "Don't have an account? Sign Up"}
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}