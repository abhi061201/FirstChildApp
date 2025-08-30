import { NavigationContainer } from '@react-navigation/native';
import RootStack from './src/Navigation/RootStack';

const App = (props: any) => {
  // this flag tell me to open app from superApp or normally
  const isFromSuperApp = props?.route?.params?.isFromSuperApp ?? false;
  return isFromSuperApp ? (
    <RootStack initialProps={{ nativeParams: props?.route?.params }} />
  ) : (
    <NavigationContainer>
      <RootStack initialProps={{ nativeParams: props?.route?.params }} />
    </NavigationContainer>
  );
};

export default App;
