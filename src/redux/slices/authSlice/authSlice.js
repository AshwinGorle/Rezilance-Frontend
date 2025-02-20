import { createSlice } from "@reduxjs/toolkit";

const initialUserState = {
  authDetails: {
    status: "idle", // Tracks the API call state
    data: null,
    error: null,
  },
  login: {
    status: "idle", // Tracks the API call state
    data: null,
    error: null,
  },
  logout: {
    status: null,
    error: null,
  },
  changePassword: {
    status: null,
    error: null,
    data: null,
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialUserState,
  reducers: {
    checkAuthRequest: (state, action) => {
      state.authDetails.status = "pending";
    },
    checkAuthSuccess: (state, action) => {
      state.authDetails.status = "success";
      state.authDetails.data = action.payload;
      state.authDetails.checked = true;
    },
    checkAuthFailure: (state, action) => {
      state.authDetails.status = "failed";
      state.authDetails.data = null;
      state.authDetails.error = action.payload;
      state.authDetails.checked = true;
      state.login.data = null;
    },
    resetAuthState: (state) => {
      state.authDetails.status = "idle";
      state.authDetails.data = null;
      state.authDetails.checked = true;
      state.login.data = null;
      state.authDetails.error = null;
    },
    registerRequest: (state, action) => {
      state.authDetails.status = "pending";
    },
    registerSuccess: (state, action) => {
      state.authDetails.status = "success";
      state.authDetails.data = action.payload;
    },
    registerFailure: (state, action) => {
      state.authDetails.status = "failed";
      state.authDetails.data = null;
      state.authDetails.error = action.payload;
    },
    loginRequest: (state, action) => {
      state.login.status = "pending";
    },
    loginSuccess: (state, action) => {
      state.login.status = "success";
      state.login.data = action.payload;
      state.authDetails.checked = true;
      state.authDetails.data = action.payload;
    },
    loginFailure: (state, action) => {
      state.login.status = "failed";
      state.login.error = action.payload;
    },
    logoutRequest: (state, action) => {
      state.logout.status = "pending";
    },
    logoutSuccess: (state, action) => {
      state.logout.status = "success";
      state.authDetails.data = null;
    },
    logoutFailure: (state, action) => {
      state.logout.status = "failed";
      state.logout.error = action.payload;
    },
    changePasswordRequest: (state, action) => {
      state.changePassword.status = "pending";
    },
    changePasswordSuccess: (state, action) => {
      state.changePassword.status = "success";
      state.changePassword.data = action.payload;
    },
    changePasswordFailure: (state, action) => {
      state.changePassword.status = "failed";
      state.changePassword.error = action.payload;
    },
    clearAuthDetailsStatus: (state) => {
      state.authDetails.status = null;
    },
    clearAuthDetailsError: (state) => {
      state.authDetails.error = null;
    },
    clearAuthDetailsData: (state) => {
      state.authDetails.data = null;
    },
    clearLogoutStatus: (state) => {
      state.logout.status = null;
    },
    clearLogoutError: (state) => {
      state.logout.error = null;
    },
    clearLogoutData: (state) => {
      state.logout.data = null;
    },
    clearChangePasswordStatus: (state) => {
      state.changePassword.status = null;
    },
    clearChangePasswordError: (state) => {
      state.changePassword.error = null;
    },
  },
});

export const authActions = authSlice.actions;
export const authReducer = authSlice.reducer;
