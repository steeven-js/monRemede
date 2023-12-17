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
import { store } from './store/store';
import CategoryScreen from './src/screen/CategoryScreen';
import PlantDetail from './src/screen/PlantDetail';

const HomeStack = createStackNavigator();
const CategoryStack = createStackNavigator();
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
          <Drawer.Screen name="Home" component={MainStack} options={{ headerShown: false }} />
          {/* Ajouter la pile de navigation CategoryStack ici */}
          <Drawer.Screen
            name="Categories"
            component={PlantStackScreen}
            options={{ headerShown: false, drawerLabel: () => null }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

const PlantStackScreen = () => {
  return (
    <CategoryStack.Navigator>
      {/* Ajouter les écrans de la pile CategoryStack ici */}
      <CategoryStack.Screen name="PlantScreen" component={PlantDetail} options={{ headerShown: false }} />
      {/* ... autres écrans de catégorie */}
    </CategoryStack.Navigator>
  );
};

export default App;
