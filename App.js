//import Socket from 'socket.io-client';
import React, { useRef, useState, useEffect } from 'react';
import { Button, SafeAreaView, StyleSheet, View, Text, KeyboardAvoidingView } from 'react-native';
import { TailwindProvider } from "tailwindcss-react-native";
import { AppNavigator } from './src/Screens/Navigator';
//import SplashScreen from './src/Screens/SplashScreen';



import { Provider } from 'react-redux';
import store from './src/store';

const App = () => {

  useEffect(() => {


    setTimeout(() => {
      // setAppReady(true);
    }, 2000);


  }, []);
  return (
    <Provider store={store}>

      <TailwindProvider>

        {/* {appReady ? <AppNavigator /> : <SplashScreen />} */}
        <AppNavigator />
      </TailwindProvider>
    </Provider>
  );

};


export default App;