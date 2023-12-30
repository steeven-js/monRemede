import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from './src/screen/splash';
import HomeDrawer from './src/navigation/drawer/HomeDrawer';

const Stack = createNativeStackNavigator();

const App = () => {
  const [isStarting, setIsStarting] = useState(true);

  useEffect(() => {
    setTimeout(() => {
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
