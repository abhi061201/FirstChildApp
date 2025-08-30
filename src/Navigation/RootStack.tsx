import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ChildScreen1 from '../Screens/ChildScreen1';
import ChildScreen2 from '../Screens/ChildScreen2';
import SplashScreen from '../Screens/SplashScreen';

const Stack = createNativeStackNavigator();

function RootStack({ initialProps }: { initialProps: any }) {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{ headerShown: true }}
    >
      <Stack.Screen
        name="Splash"
        component={SplashScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CarApp"
        component={ChildScreen1}
        initialParams={initialProps}
        options={{ headerBackVisible: false }}
      />
      <Stack.Screen
        name="Screen2"
        component={ChildScreen2}
        options={{ headerShown: true }}
      />
    </Stack.Navigator>
  );
}

export default RootStack;
