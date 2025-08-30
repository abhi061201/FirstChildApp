import { Button, StyleSheet, Text, View } from 'react-native';
import React, { useCallback } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';

const ChildScreen1 = () => {
  const route = useRoute();
  const params = route.params?.nativeParams;
  console.log('params native', JSON.stringify(params));
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
      <Text style={{ fontSize: 24, fontWeight: '800', textAlign: 'center' }}>
        Mini App {params?.index}
      </Text>
      <Text style={{ fontSize: 18, fontWeight: '500', textAlign: 'center' }}>
        Hi there, this message is for you from superApp
      </Text>
      <Text
        style={{
          fontSize: 18,
          fontWeight: 'bold',
          textAlign: 'center',
          color: 'teal',
        }}
      >
        {params?.message}
      </Text>

      <Button
        onPress={handlePress}
        title="Go to screen 2"
        color={params?.color}
      />
    </View>
  );
};

export default ChildScreen1;

const styles = StyleSheet.create({});
