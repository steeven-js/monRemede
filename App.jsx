import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Splash from './src/screen/splash';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/navigation/stacks/Home';
import SymptomeStack from './src/navigation/stacks/SymptomStack';
import PlanteStack from './src/navigation/stacks/Plante';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

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
      <Drawer.Navigator initialRouteName="HomeStack" screenOptions={{ headerShown: false }}>
        <Drawer.Screen name="HomeStack" component={HomeStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="SymptomeStack" component={SymptomeStack} />
      <Stack.Screen name="PlanteStack" component={PlanteStack} />
    </Stack.Navigator>
  );
};

export default App;
