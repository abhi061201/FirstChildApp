import { Image, StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import { CommonActions, useNavigation } from '@react-navigation/native';

const SplashScreen = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: 'ChildScreen1' }],
        }),
      );
    }, 2000);
  }, []);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
      }}
    >
      <Image
        source={require('../assets/superapp.png')}
        style={{ height: 300, width: 300 }}
      ></Image>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({});
