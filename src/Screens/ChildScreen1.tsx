import React, { useCallback } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

const CarApp = () => {
  const route = useRoute();
  const params = route.params?.nativeParams;
  const navigation = useNavigation();

  const handlePress = useCallback(() => {
    navigation.navigate('Screen2');
  }, []);

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: params?.color || '#4f46e5' },
      ]}
    >
      <Image
        source={require('../assets/car.png')}
        style={styles.image}
        resizeMode="contain"
      />

      <View style={styles.card}>
        <Text style={styles.title}>Hi there</Text>
        <Text style={styles.subtitle}>A special message from SuperApp:</Text>
        <Text style={styles.dynamicMessage}>
          {params?.message ?? 'No Message'}
        </Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>Go to Screen 2</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CarApp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  header: {
    fontSize: 22,
    fontWeight: '800',
    color: '#fff',
    textAlign: 'center',
    marginTop: 20,
  },
  image: {
    width: 200,
    height: 250,
  },
  card: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 20,
    width: '90%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 6 },
    shadowRadius: 10,
    elevation: 6,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: '#0f172a',
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 16,
    color: '#475569',
    marginBottom: 8,
    textAlign: 'center',
  },
  dynamicMessage: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'teal',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#fff',
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 30,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 6 },
    shadowRadius: 8,
    elevation: 4,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#0f172a',
  },
});
