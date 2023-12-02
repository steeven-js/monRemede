// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Usages from './src/screen/Usages';
import Plantes from './src/screen/Plantes';
import Favoris from './src/screen/Favoris';
import TopBar from './src/navigation/TopBar';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Plantes médicinales"
      screenOptions={{
        header: (props) => <TopBar {...props} />,
        animationEnabled: false,
      }}
    >
      <Stack.Screen name="Usages thérapeutiques" component={Usages} />
      <Stack.Screen name="Plantes médicinales" component={Plantes} />
      <Stack.Screen name="Favoris" component={Favoris} />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={MainStack} options={{ headerShown: false }} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
