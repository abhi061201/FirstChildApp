import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ChildScreen1 from '../Screens/ChildScreen1';
import ChildScreen2 from '../Screens/ChildScreen2';

const Stack = createNativeStackNavigator();

function RootStack({ initialProps }: { initialProps: any }) {
  return (
    <Stack.Navigator initialRouteName="ChildScreen1">
      <Stack.Screen
        name="ChildScreen1"
        component={ChildScreen1}
        initialParams={initialProps}
      />
      <Stack.Screen name="ChildScreen2" component={ChildScreen2} />
    </Stack.Navigator>
  );
}

export default RootStack;
