// App
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeDrawer from './src/navigation/drawer/HomeDrawer';
import Splash from './src/screen/splash';
import Home from './src/navigation/stacks/Home';
import SymptomeStack from './src/navigation/stacks/SymptomStack';
import PlanteStack from './src/navigation/stacks/Plante';

const Stack = createNativeStackNavigator();

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
    // <NavigationContainer>
    //   <HomeDrawer />
    // </NavigationContainer>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="HomeStack" component={Home} />
        <Stack.Screen name="SymptomeStack" component={SymptomeStack} />
        <Stack.Screen name="PlanteStack" component={PlanteStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App;
