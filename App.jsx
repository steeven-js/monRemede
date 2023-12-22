// App
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
    // Mise à jour de l'état après un délai de 2500 millisecondes (2.5 secondes)
    setTimeout(() => {
      // Mise à jour de l'état
      setIsStarting(false);
    }, 2500);
  }, []);

  // Vérification
  if (isStarting) {
    // Retourner l'écran de chargement
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
