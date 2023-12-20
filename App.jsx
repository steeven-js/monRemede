import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import auth from '@react-native-firebase/auth';
import { Provider } from 'react-redux';
import store from './redux/store';
import Usages from './src/screen/Usages';
import Plantes from './src/screen/Plantes';
import Favoris from './src/screen/Favoris';
import TopBar from './src/navigation/TopBar';
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
  const [isUserAuthenticated, setIsUserAuthenticated] = useState(false);

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged(user => {
      setIsUserAuthenticated(!!user);
    });

    return () => unsubscribe();
  }, []);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen
            name="Home"
            component={MainStack}
            options={{ headerShown: false }}
          />
          {isUserAuthenticated ? (
            <>
              {/* Afficher les écrans lorsque l'utilisateur est connecté */}
              <Drawer.Screen
                name="ProfileScreen"
                component={Profile}
                options={{ headerShown: false }}
              />
            </>
          ) : (
            <>
              {/* Afficher les écrans lorsque l'utilisateur n'est pas connecté */}
              <Drawer.Screen
                name="LoginScreen"
                component={Login}
                options={{ headerShown: false }}
              />
              <Drawer.Screen
                name="RegisterScreen"
                component={Register}
                options={{ headerShown: false, drawerLabel: () => null }}
              />
            </>
          )}
          <Drawer.Screen
            name="SymptomeDetail"
            component={SymptomeDetail}
            options={{ headerShown: false, drawerLabel: () => null }}
          />
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
