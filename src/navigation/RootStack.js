import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from '../Screens/WelcomeScreen';
import ParentsLogin from '../Screens/ParentsLoginScreen';
import ParentsHome from '../Screens/ParentsHomeScreen';
import AdminLogin from '../Screens/AdminLoginScreen';
import AdminHome from '../Screens/AdminHomeScreen';
import Teachers from '../Screens/Teachers';

const Stack = createNativeStackNavigator();

export default function RootStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
      <Stack.Screen name="ParentsLogin" component={ParentsLogin} />
      <Stack.Screen name="ParentsHome" component={ParentsHome} />
      <Stack.Screen name="AdminLogin" component={AdminLogin} />
      <Stack.Screen name="AdminHome" component={AdminHome} />
      <Stack.Screen name="Teachers" component={Teachers} />
      
      
    </Stack.Navigator>
  );
}
