import * as React from 'react';
import {useState} from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from './components/HomeScreen';
import AboutScreen from './components/AboutScreen';
import TasksScreen from './components/TasksScreen';
import GamesScreen from './components/GamesScreen';
import SettingsScreen from './components/SettingsScreen';

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
