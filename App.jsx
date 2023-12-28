// App
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import HomeDrawer from './src/navigation/drawer/HomeDrawer';
import Splash from './src/screen/splash';

const App = () => {
  const [isStarting, setIsStarting] = useState(true);

  useEffect(() => {
    // Updating state value after 2500 milliseconds(2.5 seconds) of delay.
    setTimeout(() => {
      // Updating states
      setIsStarting(false);
    }, 2500);
  }, []);

  if (isStarting) {
    return <Splash />;
  }

  return (
    <NavigationContainer>
      <HomeDrawer />
    </NavigationContainer>
  );
};


export default App;
