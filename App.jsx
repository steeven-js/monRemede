import React from 'react';
import {SafeAreaView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import store from './redux/store';
import HomeDrawer from './src/navigation/drawer/HomeDrawer';
import AppStyles from './AppStyles';

const App = () => {

  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaView style={AppStyles.safeAreaView}>
          <HomeDrawer />
        </SafeAreaView>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
