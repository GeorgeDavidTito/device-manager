import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Reactotron from 'reactotron-react-native';
import { apiSetup } from '@config/api';
import { authSetup } from '@services/AuthService';
import AppNavigator from '@components/AppNavigator';

const App = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    authSetup(dispatch);
    apiSetup(dispatch);
    },[dispatch]);

  return <AppNavigator />;
}

const MyAppWithOverlay = __DEV__ ? Reactotron.overlay(App) : App;

export default MyAppWithOverlay;
