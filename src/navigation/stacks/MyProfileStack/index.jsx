import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MyProfile from '../../../screen/MyProfile';

// Creating stack navigator
const Stack = createNativeStackNavigator();

// My profile stack
const MyProfileStack = () => {

  // Returning
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="My Profile" component={MyProfile} />
      {/* <Stack.Screen name="Addresses" component={Addresses} />
      <Stack.Screen name="Orders" component={Orders} />
      <Stack.Screen name="Order" component={Order} />
      <Stack.Screen name="Invoice" component={Invoice} />
      <Stack.Screen name="Wishlist" component={Wishlist} />
      <Stack.Screen name="Wallet" component={Wallet} />
      <Stack.Screen name="Coupons" component={Coupons} />
      <Stack.Screen name="Notifications" component={Notifications} />
      <Stack.Screen name="Messages" component={Messages} /> */}
    </Stack.Navigator>
  );
};

// Exporting
export default MyProfileStack;
