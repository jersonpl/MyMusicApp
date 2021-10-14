import 'react-native-gesture-handler';
import React from 'react';
import {Provider} from 'react-redux';
import configureStore from './src/redux/index';
import Index from './src';
import {LogBox} from 'react-native';
import {NetworkProvider} from 'react-native-offline';
import {AppContextProvider} from './src/context/AppContext';

LogBox.ignoreAllLogs();

export default () => {
  let store = configureStore();

  return (
    <AppContextProvider>
      <NetworkProvider>
        <Provider store={store}>
          <Index />
        </Provider>
      </NetworkProvider>
    </AppContextProvider>
  );
};
