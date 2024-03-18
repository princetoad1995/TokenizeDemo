import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Config from 'react-native-config';
// Slices
import userSlice from './user/userSlice';
import authSlice from './auth/authSlice';

const userPersistConfig = {
  key: 'user',
  storage: AsyncStorage,
  backlist: ['loading', 'error', 'markets'],
};

const authPersistConfig = {
  key: 'auth',
  storage: AsyncStorage,
  blacklist: ['isAuthenticated', 'loading', 'error'],
};

const reducers = combineReducers({
  user: persistReducer(userPersistConfig, userSlice),
  auth: persistReducer(authPersistConfig, authSlice),
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['user', 'auth'],
};
const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: Config.ENV !== 'production',
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({ immutableCheck: false, serializableCheck: false }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
