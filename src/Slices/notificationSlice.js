import { createSlice } from '@reduxjs/toolkit';
export const notificationSlice = createSlice({
    name: 'notification',
    initialState: {
        selectedNotification: '',
        notificationCount: 0,
    },
    reducers: {
        setselectedNotification: (state, action) => {
            state.selectedUser = action.payload;
        },
        setNoficationCount: (state, action) => {
            state.notificationCount = action.payload;
        }
    }
});

export const { setselectedNotification, setNoficationCount } = notificationSlice.actions;