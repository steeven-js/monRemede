// App
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import store from './redux/store';
import HomeDrawer from './src/navigation/drawer/HomeDrawer';
import Splash from './src/screen/Splash';
import { fetchPlants, fetchSymptomes } from './redux/fetchApi'; // Importez l'action fetchSymptomes

const App = () => {

  // Local states
  const [isStarting, setIsStarting] = useState(true);

  // Hooks
  useEffect(() => {
    // Exécutez le chargement initial des symptômes ici
    store.dispatch(fetchSymptomes());
    store.dispatch(fetchPlants());

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
