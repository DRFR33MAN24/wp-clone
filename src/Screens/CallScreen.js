//import Socket from 'socket.io-client';
import { Button, SafeAreaView, StyleSheet, View, Text, KeyboardAvoidingView } from 'react-native';
import React, { useRef, useState, useEffect } from 'react';
import { TailwindProvider } from "tailwindcss-react-native";
import { AppNavigator } from './src/Screens/Navigator';
import SplashScreen from './src/Screens/SplashScreen';

import { Provider } from 'react-redux';
import store from './src/store';
// import {
//   RTCView,
//   RTCPeerConnection,
//   RTCIceCandidate,
//   RTCSessionDescription,
//   mediaDevices,
//   MediaStream
// } from 'react-native-webrtc';




//const socket = Socket.connect('ws://192.168.1.18:4000')
const App = () => {
    //const [appReady, setAppReady] = useState(true);
    // const [remoteStream, setRemoteStream] = useState(null);
    // const [webcamStarted, setWebcamStarted] = useState(false);
    // const [localStream, setLocalStream] = useState(null);
    // let offer = useRef();

    // const pc = useRef();
    // const servers = {
    //   iceServers: [
    //     {
    //       urls: [
    //         'stun:stun1.l.google.com:19302',
    //         'stun:stun2.l.google.com:19302',
    //         'stun:iphone-stun.strato-iphone.de:3478',
    //         'stun:numb.viagenie.ca:3478',
    //         'stun:stun.12connect.com:3478',
    //         'stun:stun.12voip.com:3478',
    //         'stun:stun.1und1.de:3478',
    //         'stun:stun.3cx.com:3478',
    //         'stun:stun.acrobits.cz:3478',
    //         'stun:stun.actionvoip.com:3478'
    //       ],
    //     },
    //   ],
    //   iceCandidatePoolSize: 10,
    // };

    // const init = async () => {
    //   const local = await mediaDevices.getUserMedia({
    //     video: true,
    //     audio: true,
    //   });

    //   pc.current = new RTCPeerConnection(servers);

    //   pc.current.addStream(local);
    //   // Push tracks from local stream to peer connection
    //   local.getTracks().forEach(track => {
    //     console.log(pc.current.getLocalStreams());
    //     pc.current.getLocalStreams()[0].addTrack(track);
    //   });

    //   const remote = new MediaStream();
    //   //console.log(remote);
    //   setRemoteStream(remote);
    //   setLocalStream(local);
    //   setWebcamStarted(true);
    // }

    // const handlePeerJoined = async (memberId) => {
    //   console.log('A new peer has joined this room:', memberId)
    //   createOffer(memberId)
    // }

    // const handleMessageFromPeer = async (memberId, msg) => {

    //   const message = JSON.parse(msg);

    //   if (message.type === 'offer') {

    //     offer = message.offer
    //     createAnswer(memberId)
    //   }

    //   if (message.type === 'answer') {

    //     addAnswer(message.answer)
    //   }

    //   if (message.type === 'candidate') {
    //     if (pc.current) {
    //       pc.current.addIceCandidate(new RTCIceCandidate(message.candidate));
    //     }
    //   }
    // }


    // const createPeerConnection = async (sdpType, memberId) => {


    //   pc.current.onaddstream = event => {
    //     setRemoteStream(event.stream);
    //   };
    //   // Pull tracks from remote stream, add to video stream
    //   pc.current.ontrack = event => {
    //     event.streams[0].getTracks().forEach(track => {
    //       remote.addTrack(track);
    //     });
    //   };

    //   pc.current.onicecandidate = async event => {

    //     if (event.candidate) {
    //       socket.emit('message', memberId, JSON.stringify({ type: 'candidate', candidate: event.candidate }))
    //     }
    //   };

    // }
    // const createOffer = async (memberId) => {
    //   createPeerConnection('offer-sdp', memberId);
    //   //create offer
    //   offer = await pc.current.createOffer();

    //   await pc.current.setLocalDescription(offer);
    //   socket.emit('message', memberId, JSON.stringify({ type: 'offer', offer: offer }))

    // }


    // const createAnswer = async (memberId) => {
    //   createPeerConnection('answer-sdp', memberId);
    //   await pc.current.setRemoteDescription(offer);

    //   const answer = await pc.current.createAnswer();
    //   await pc.current.setLocalDescription(answer);
    //   socket.emit('message', memberId, JSON.stringify({ type: 'answer', answer: answer }))


    // }
    // const addAnswer = async (answer) => {
    //   const answerDescription = new RTCSessionDescription(answer);
    //   pc.current.setRemoteDescription(answerDescription)


    // }

    // useEffect(() => {
    //   init();
    //   socket.on('connect', () => {

    //     socket.on('peerJoined', async (memberId) => {
    //       handlePeerJoined(memberId);
    //     });

    //     socket.on('message', async (memberId, message) => {

    //       handleMessageFromPeer(memberId, message)
    //     });

    //   })
    //   return () => {
    //     if (socket.connected) socket.close(); // close the socket if the view is unmounted
    //   };
    // }, [])
    useEffect(() => {


        setTimeout(() => {
            setAppReady(true);
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
    // return (
    //   <KeyboardAvoidingView style={styles.body} behavior="position">
    //     <SafeAreaView>
    //       {localStream && (
    //         <RTCView
    //           streamURL={localStream?.toURL()}
    //           style={styles.stream}
    //           objectFit="cover"
    //           mirror
    //         />
    //       )}



    //       {remoteStream && (
    //         <RTCView
    //           streamURL={remoteStream?.toURL()}
    //           style={styles.stream}
    //           objectFit="cover"
    //           mirror
    //         />
    //       )}


    //     </SafeAreaView>
    //   </KeyboardAvoidingView>
    // )
};

// const styles = StyleSheet.create({
//   body: {
//     backgroundColor: '#fff',

//     justifyContent: 'center',
//     alignItems: 'center',
//     ...StyleSheet.absoluteFill,
//   },
//   stream: {
//     flex: 2,
//     width: 200,
//     height: 200,
//   },
//   buttons: {
//     alignItems: 'flex-start',
//     flexDirection: 'column',
//   },
// });
export default App;