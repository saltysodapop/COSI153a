import * as React from 'react';
import { View, Text, Button } from 'react-native';

function GamesScreen() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#f5fffa' }}>
        <Text>Pick a minigame!</Text>
        <Button
          color='#483d8b'
          title="game 1"/>
        <Button
          color='#483d8b'
          title="game 2"/>
        <Button
          color='#483d8b'
          title="game 3"/>
      </View>
    );
  }

  export default GamesScreen