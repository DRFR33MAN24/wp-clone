import { configureStore } from '@reduxjs/toolkit';

import authReducers from '../src/Reducers/authSlice';



export default configureStore({
    reducer: {

        auth: authReducers,

    },
});