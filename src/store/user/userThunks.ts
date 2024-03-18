import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getMarketsFailure,
  getMarketsRequest,
  getMarketsSuccess,
  resetUser,
} from './userSlice';
import UserServices from '@/services/user-services/userServices';
import { resetAuth } from '../auth/authSlice';

export const getMarkets = createAsyncThunk(
  'user/getMarkets',
  async (_, { dispatch }) => {
    try {
      dispatch(getMarketsRequest());
      const responseSummaries = await UserServices.getSummaries();
      const responseMarkets = await UserServices.getMarkets();
      // merge summaries to markets
      const response = responseMarkets.map(item => {
        const newMarketList = item.list.map(coin => {
          const summary = responseSummaries.find(
            summary => summary.market === coin.marketName,
          );
          return {
            ...coin,

            lastPrice: summary?.lastPrice || 0,
            openPrice: summary?.openPrice || 0,
          };
        });
        return {
          ...item,
          list: newMarketList,
        };
      });
      dispatch(getMarketsSuccess(response));
    } catch (error) {
      console.log('error getMarkets', error);
      dispatch(getMarketsFailure(error));
    }
  },
);

export const logout = createAsyncThunk(
  'user/logout',
  async (_, { dispatch }) => {
    dispatch(resetAuth());
    dispatch(resetUser());
    return true;
  },
);
