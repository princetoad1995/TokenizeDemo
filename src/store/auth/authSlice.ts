import { ResponseErrorProps } from '@/services/types';
import { createSlice } from '@reduxjs/toolkit';

export type AuthInitialProps = {
  isAuthenticated?: boolean;
  loading?: boolean;
  error?: ResponseErrorProps | null | string; // handle error later
};

const initialState = {
  isAuthenticated: false,
  loading: false,
  error: null,
} as AuthInitialProps;

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginRequest: state => {
      state.loading = true;
      state.error = null;
    },
    loginSusscess: state => {
      state.isAuthenticated = true;
      state.loading = false;
    },
    loginFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    resetAuth: state => {
      state.isAuthenticated = false;
      state.loading = false;
      state.error = null;
    },
  },
});

export const { loginSusscess, loginRequest, loginFailure, resetAuth } =
  authSlice.actions;

export default authSlice.reducer;
