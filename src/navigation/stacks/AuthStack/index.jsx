import Login from "../../../screen/Login";
import Register from "../../../screen/Register";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Creating stack navigator
const Stack = createNativeStackNavigator();

// Auth stack
const AuthStack = () => {

  // Returning
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
};

// Exporting
export default AuthStack;
