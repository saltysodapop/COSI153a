import * as React from 'react';
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
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{headerShown: false}}/>
        <Stack.Screen 
          name="About" 
          component={AboutScreen}
          options={{
            headerStyle: {backgroundColor: '#E1F2EB',},
            headerTintColor: '#483d8b',
            headerShadowVisible: false,
          }}/>
        <Stack.Screen 
          name="Current tasks" 
          component={TasksScreen} 
          options={{headerShown: false}}/>
        <Stack.Screen 
          name="Minigames" 
          component={GamesScreen} 
          options={{headerShown: false}}/>
        <Stack.Screen 
          name="Settings" 
          component={SettingsScreen} 
          options={{
            headerStyle: {backgroundColor: '#E1F2EB',},
            headerTintColor: '#483d8b',
            headerShadowVisible: false,
          }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
