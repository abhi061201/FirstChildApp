import { Button, StyleSheet, Text, View } from 'react-native';
import React, { useCallback } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';

const ChildScreen1 = () => {
  const route = useRoute();
  const params = route.params
  const navigation = useNavigation();
  const handlePress = useCallback(() => {
    navigation.navigate('ChildScreen2');
  }, []);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20,
      }}
    >
      <Text>ChildApp</Text>
      <Button onPress={handlePress} title="Go to screen 2" color={params?.color}/>
    </View>
  );
};

export default ChildScreen1;

const styles = StyleSheet.create({});
