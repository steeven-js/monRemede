// App
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import HomeDrawer from './src/navigation/drawer/HomeDrawer';
import Splash from './src/screen/splash';
import { fetchSymptomes } from './redux/reducer/symptomeSlice';
import { fetchPlantes } from './redux/reducer/plantSlice';

const App = () => {
  const dispatch = useDispatch();
  const [isStarting, setIsStarting] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      // Dispatch de l'action pour récupérer les symptômes
      await dispatch(fetchSymptomes());
      await dispatch(fetchPlantes());

      // Mettez à jour l'état après un délai de 2500 millisecondes (2.5 secondes)
      setTimeout(() => {
        setIsStarting(false);
      }, 2500);
    };

    fetchData();
  }, [dispatch]);

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
