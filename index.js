/**
 * @format
 */

import React from 'react';
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import 'react-native-gesture-handler';

const AppWithRedux = () => (
    <App />
);

AppRegistry.registerComponent(appName, () => AppWithRedux);
