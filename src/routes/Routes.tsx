import React from 'react';
import { useSelector } from 'react-redux';
import AuthRoute from './AuthRoute';
import { RootState } from '@/store/store';
import BottomTabNavigator from './BottomTabNavigator';

const Routes = () => {
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);

  return !isAuthenticated ? <AuthRoute /> : <BottomTabNavigator />;
};

export default Routes;
