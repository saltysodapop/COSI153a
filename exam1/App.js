import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { TextInput } from 'react-native-web'

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.bigText}>Calculate area of triangle by Herron's rule</Text>
      <Text style={styles.text}>Write the code for this app which calculates</Text>
      <Text style={styles.text}>area = Math.sqrt(s*(s-a)*(s-b)*(s-c))</Text>
      <Text style={styles.text}>where s = (a+b+c)/2</Text>
      <TextInput style={styles.input}></TextInput>
      <TextInput style={styles.input}></TextInput>
      <TextInput style={styles.input}></TextInput>
      <Button title = 'calculate area'></Button>
      <Text style={styles.text}>area is </Text>
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
    borderWidth: 3,
    marginVertical: 30,
    marginHorizontal: 30,
  },
  text: {
    fontSize: 14,
  },
  bigText: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  input: {
    backgroundColor: 'yellow',
  },
});
