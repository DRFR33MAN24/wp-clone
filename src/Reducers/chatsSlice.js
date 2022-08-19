import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import AsyncStorage from '@react-native-async-storage/async-storage';
import auth from '@react-native-firebase/auth';



const chatsSlice = createSlice({
    name: 'chats',
    initialState: {
        rooms: [],
        unfilteredRooms: [],
        chatErrors: {},


        status: 'idle',
    },
    reducers: {
        setRooms: (state, action) => {
            state.rooms = action.payload;
            // storeToken(action.payload.token);
        },
        setUnfilteredRooms: (state, action) => {
            state.unfilteredRooms = action.payload;
            // storeToken(action.payload.token);
        },
        setErrors: (state, action) => {
            state.chatErrors = action.payload;
        },
        clearChatErrors: (state, action) => {
            state.chatErrors = {};
        },

    },
    // extraReducers: builder => {
    //     builder
    //         .addCase(login.pending, (state, action) => {
    //             state.status = 'loading';
    //         })
    //         .addCase(login.fulfilled, (state, action) => {
    //             // console.log('login full', action.payload);

    //             state.user = action.payload;
    //             state.status = 'idle';
    //             // state.token = action.payload.token;
    //             // storeUser(action.payload);
    //         })
    //         .addCase(login.rejected, (state, action) => {
    //             state.authErrors = action.payload;
    //             state.user = {};
    //             state.token = '';
    //         })
    //         .addCase(register.pending, (state, action) => {
    //             state.status = 'loading';
    //         })
    //         .addCase(register.fulfilled, (state, action) => {
    //             state.user = action.payload;
    //             state.status = 'idle';
    //             // storeUser(action.payload);
    //         })
    //         .addCase(register.rejected, (state, action) => {
    //             state.authErrors = action.payload;
    //             state.user = {};
    //             state.token = '';
    //         })
    //         // .addCase(loginGoogle.pending, (state, action) => {
    //         //     state.status = 'loading';
    //         // })
    //         // .addCase(loginGoogle.fulfilled, (state, action) => {
    //         //     state.user = action.payload.user;
    //         //     state.status = 'idle';
    //         //     state.token = action.payload.token;
    //         //     storeUser(action.payload);
    //         // })
    //         // .addCase(loginGoogle.rejected, (state, action) => {
    //         //     state.authErrors = action.payload;
    //         //     state.user = {};
    //         //     state.token = '';
    //         // })
    //         .addCase(loadUser.pending, (state, action) => {
    //             state.status = 'loading';
    //         })
    //         .addCase(loadUser.fulfilled, (state, action) => {
    //             state.user = action.payload.user;
    //             state.token = action.payload.token;
    //             state.status = 'idle';
    //         })
    //         .addCase(loadUser.rejected, (state, action) => {
    //             state.authErrors = action.payload;
    //             state.user = {};
    //             state.token = '';
    //         })
    //         .addCase(reloadUser.pending, (state, action) => {
    //             state.status = 'loading';
    //         })
    //         .addCase(reloadUser.fulfilled, (state, action) => {
    //             state.user = action.payload.user;
    //             state.token = action.payload.token;
    //             state.status = 'idle';
    //             storeUser(action.payload);
    //         })
    //         .addCase(reloadUser.rejected, (state, action) => {
    //             //state.authErrors = action.payload;
    //             state.user = {};
    //             state.token = '';
    //         })
    //         .addCase(logout.pending, (state, action) => {
    //             state.status = 'loading';
    //         })
    //         .addCase(logout.fulfilled, (state, action) => {
    //             state.user = {};
    //             state.token = '';
    //             state.status = 'idle';
    //         })
    //         .addCase(logout.rejected, (state, action) => { });
    // },
});

// Action creators are generated for each case reducer function
export const { setRooms, setErrors, clearChatErrors } =
    chatsSlice.actions;

export default chatsSlice.reducer;