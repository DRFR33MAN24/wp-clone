import {configureStore} from '@reduxjs/toolkit';

import authReducers from '../src/Reducers/authSlice';
import chatsReducers from '../src/Reducers/chatsSlice';

export default configureStore({
  reducer: {
    auth: authReducers,
    chats: chatsReducers,
  },
});
