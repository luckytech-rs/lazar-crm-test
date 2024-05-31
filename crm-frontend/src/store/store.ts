import { configureStore } from '@reduxjs/toolkit';
import authReducer from './reducers/auth/authSlice';
import usersReducer from './reducers/users/usersSlice';
import profileReducer from './reducers/users/profileSlice';

const store = configureStore({
    reducer: {
        auth: authReducer,
        users: usersReducer,
        profile: profileReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
