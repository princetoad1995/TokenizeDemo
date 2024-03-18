import { MarketProps } from '@/models';
import { ResponseErrorProps } from '@/services/types';
import { createSlice } from '@reduxjs/toolkit';

type UserInitialProps = {
  markets: MarketProps[];
  loading?: boolean;
  error?: ResponseErrorProps | null | string; // handle error later
};

const initialState = {
  markets: [],
  loading: false,
  error: null,
} as UserInitialProps;

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getMarketsRequest: state => {
      state.loading = true;
      state.error = null;
    },
    getMarketsSuccess: (state, action) => {
      state.loading = false;
      state.markets = action.payload;
      state.error = null;
    },
    getMarketsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.markets = [];
    },
    resetUser() {
      return initialState;
    },
  },
});

export const {
  getMarketsRequest,
  getMarketsSuccess,
  getMarketsFailure,
  resetUser,
} = userSlice.actions;

export default userSlice.reducer;
