import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { TextInput } from 'react-native-web'

export default function App() {
  const [textA, setTextA] = useState('');
  const [textB, setTextB] = useState('');
  const [textC, setTextC] = useState('');
  const [area, setArea] = useState(0);
  
  return (
    <View style={styles.container}>
      <Text style={styles.bigText}>Calculate area of triangle by Herron's rule</Text>
      <Text style={styles.text}>Write the code for this app which calculates</Text>
      <Text style={styles.text}>area = Math.sqrt(s*(s-a)*(s-b)*(s-c))</Text>
      <Text style={styles.text}>where s = (a+b+c)/2</Text>
      <TextInput 
        style={styles.input}
        onChangeText={newText => setTextA(newText)}
      />
      <TextInput 
        style={styles.input}
        onChangeText={newText => setTextB(newText)}
      />
      <TextInput 
        style={styles.input}
        onChangeText={newText => setTextC(newText)}
      />
      <Button 
        title = 'calculate area'
        onPress={() => {
          const a = parseFloat(textA)
          const b = parseFloat(textB)
          const c = parseFloat(textC)
          const s = ((a+b+c)/2)
          setArea(Math.sqrt(s*(s-a)*(s-b)*(s-c)))}
        }
      />
      <Text style={styles.text}>area is {area}</Text>
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
