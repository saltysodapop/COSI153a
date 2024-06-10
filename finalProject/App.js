import * as React from 'react';
import {useState} from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen({ navigation }) {
  return (
    <><View style={{flexDirection: 'row-reverse', justifyContent: 'space-between' }}>
        <Button style={{ top: 0, right: 0 }}
        title="Settings"
        onPress={() => navigation.navigate('Settings')} />
      </View><View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-evenly' }}>
      <Text>Welcome :)</Text>
      <Button
        title="About"
        onPress={() => navigation.navigate('About')} />
    </View><View style={{flexDirection: 'row', justifyContent: 'space-between' }}>
      <Button style={{ bottom: 0, left: 0 }}
        title="Tasks"
        onPress={() => navigation.navigate('Current tasks')} />
        <Button style={{ bottom: 0, right: 0 }}
        title="Games"
        onPress={() => navigation.navigate('Minigames')} />
      </View></>
    
  );
}

function AboutScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>About page</Text>
    </View>
  );
}

function TasksScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Add a new task</Text>
    </View>
  );
}

function GamesScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Pick a game!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Change settings</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
        <Stack.Screen name="Current tasks" component={TasksScreen} />
        <Stack.Screen name="Minigames" component={GamesScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
