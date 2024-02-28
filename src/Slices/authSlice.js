import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    pagestate: true,
    user: "",
    token: "",
    isFullscreen: false,
    isDashboard: false,
    selectedrequest: null,
    selectedproject:null,
  },
  
  reducers: {
    setPageState: (state, action) => {
      state.pagestate = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setIsFullscreen: (state, action) => {
      state.isFullscreen = action.payload;
    },
    setIsDashboard: (state, action) => {
      state.isDashboard = action.payload;
    },
    setSelectedRequest: (state, action) => {
      state.selectedrequest = action.payload;
    },
    setSelectedProject: (state, action) => {
      state.selectedproject = action.payload;
    },
  
  },
});

// Action creators are generated for each case reducer function
export const {
  setPageState,
  setUser,
  setToken,
  setIsFullscreen,
  setIsDashboard,
  setSelectedRequest,
  setSelectedProject
} = authSlice.actions;
