import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {AppReducer} from '../Reducers/index';
import AppNavigator from '../../Screens/Containers/UserList';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import {PersistGate} from 'redux-persist/integration/react';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, AppReducer);
let persistsStore = createStore(persistedReducer, applyMiddleware(thunk));
let persistor = persistStore(persistsStore);

export default class config extends React.Component {
  render() {
    return (
      <Provider store={persistsStore}>
        <PersistGate loading={null} persistor={persistor}>
          <AppNavigator />
        </PersistGate>
      </Provider>
    );
  }
}
