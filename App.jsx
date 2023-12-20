import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import store from './redux/store';
import HomeDrawer from './src/navigation/drawer/HomeDrawer';
import Splash from './src/screen/splash';

const App = () => {

  // Local states
  const [isStarting, setIsStarting] = useState(true);

  // Hooks
  useEffect(() => {
    // Updating state value after 2500 milliseconds(2.5 seconds) of delay.
    setTimeout(() => {
      // Updating states
      setIsStarting(false);
    }, 2500);
  }, []);

  // Checking
  if (isStarting) {
    // Returning
    return <Splash />;
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <HomeDrawer />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
