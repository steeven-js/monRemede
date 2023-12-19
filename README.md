```bash
emulator -avd Pixel_7_Pro_API_33 -dns-server 8.8.8.8,8.8.4.4`

npx react-native start
```

`useSelector` et `useDispatch` sont deux hooks fournis par React Redux, une bibliothèque React pour la gestion de l'état global de l'application. Ces hooks facilitent l'interaction avec le store Redux.

1. **`useSelector` :**
   - Il est utilisé pour extraire des données du store Redux dans un composant fonctionnel.
   - Il prend en argument une fonction de sélecteur qui spécifie quelle partie de l'état global doit être extraite.
   - Lorsque l'état dans le store Redux change, le composant sera automatiquement mis à jour avec les nouvelles données extraites.

   Exemple :

   ```javascript
   import { useSelector } from 'react-redux';

   const MyComponent = () => {
     const counter = useSelector(state => state.counter);
     return <p>Counter: {counter}</p>;
   };
   ```

2. **`useDispatch` :**
   - Il est utilisé pour obtenir une référence à la fonction `dispatch` du store Redux.
   - La fonction `dispatch` est utilisée pour déclencher des actions qui modifient l'état global dans le store Redux.

   Exemple :

   ```javascript
   import { useDispatch } from 'react-redux';
   import { increment } from './actions';

   const MyComponent = () => {
     const dispatch = useDispatch();

     const handleIncrement = () => {
       dispatch(increment());
     };

     return (
       <button onClick={handleIncrement}>
         Increment
       </button>
     );
   };
   ```

En résumé, `useSelector` est utilisé pour extraire des données du store Redux, tandis que `useDispatch` est utilisé pour obtenir la fonction `dispatch` afin de déclencher des actions. Ensemble, ces deux hooks facilitent la gestion de l'état global dans les composants fonctionnels React connectés à Redux.