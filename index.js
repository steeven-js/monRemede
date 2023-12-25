/**
 * @format
 */

import React from 'react';
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { Provider } from 'react-redux';
import store from './redux/store';
import 'react-native-gesture-handler';

const AppWithRedux = () => (
    <Provider store={store}>
        <App />
    </Provider>
);

AppRegistry.registerComponent(appName, () => AppWithRedux);
