import AuthServices from '../../services/auth-services/authServices';
import { LoginRequestProps } from '@/services';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { loginFailure, loginRequest, loginSusscess } from './authSlice';
import { getMarkets } from '../user/userThunks';

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (payload: LoginRequestProps, { dispatch }) => {
    try {
      dispatch(loginRequest());
      const response = await AuthServices.login(payload);
      if (response.token) {
        dispatch(loginSusscess());
        await dispatch(getMarkets());
      } else {
        dispatch(loginFailure('We do not have access_token'));
      }
    } catch (error) {
      dispatch(loginFailure(error));
    }
  },
);
