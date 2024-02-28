import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from '../Slices/authSlice';
// import { notificationSlice } from '../Slices/notificationSlice';
// import { dataSlice } from '../Slices/dataSlice';

export const store = configureStore({
    reducer: {
        authState: authSlice.reducer,
        // notificationState: notificationSlice.reducer,
        // dataState: dataSlice.reducer
    },
});