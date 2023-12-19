// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Provider } from 'react-redux';

import Usages from './src/screen/Usages';
import Plantes from './src/screen/Plantes';
import Favoris from './src/screen/Favoris';
import TopBar from './src/navigation/TopBar';
import store from './redux/store';
import SymptomeDetail from './src/screen/detailScreens/SymptomeDetail';
import PlantDetail from './src/screen/detailScreens/PlantDetail';
import Login from './src/screen/user/Login';
import Register from './src/screen/user/Register';
import Profile from './src/screen/user/Profile';

const HomeStack = createStackNavigator();
const Drawer = createDrawerNavigator();

const MainStack = () => {
  return (
    <HomeStack.Navigator
      initialRouteName="Plantes médicinales"
      screenOptions={{
        header: (props) => <TopBar {...props} />,
        animationEnabled: false,
      }}
    >
      <HomeStack.Screen name="Usages thérapeutiques" component={Usages} />
      <HomeStack.Screen name="Plantes médicinales" component={Plantes} />
      <HomeStack.Screen name="Favoris" component={Favoris} />
    </HomeStack.Navigator>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen
            name="Home"
            component={MainStack}
            options={{ headerShown: false }}
          />
          {/* Profile */}
          <Drawer.Screen
            name="ProfileScreen"
            component={Profile}
            options={{ headerShown: false }}
          />
          {/* Login */}
          <Drawer.Screen
            name="LoginScreen"
            component={Login}
            options={{ headerShown: false, drawerLabel: () => null }}
          />
          {/* Register */}
          <Drawer.Screen
            name="RegisterScreen"
            component={Register}
            options={{ headerShown: false, drawerLabel: () => null }}
          />
          {/* Category */}
          <Drawer.Screen
            name="CategoryScreen"
            component={SymptomeDetail}
            options={{ headerShown: false, drawerLabel: () => null }}
          />
          {/* Plant */}
          <Drawer.Screen
            name="PlantScreen"
            component={PlantDetail}
            options={{ headerShown: false, drawerLabel: () => null }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
