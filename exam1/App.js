import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Calculate area of triangle by Herron's rule</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'blue',
    borderWidth: 4,
    marginVertical: 35,
    marginHorizontal: 35,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 30,
  }
});
