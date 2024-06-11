import * as React from 'react';
import { Button, View, Text } from 'react-native';

function HomeScreen({ navigation }) {
    return (
      <><View style={{flexDirection: 'row-reverse', justifyContent: 'space-between', backgroundColor: '#f5fffa' }}>
          <Button style={{ top: 0, right: 0 }}
          color='#008b8b'
          title="Settings"
          onPress={() => navigation.navigate('Settings')} />
        </View><View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-evenly', backgroundColor: '#f5fffa' }}>
        <Text style={{fontSize: 18}}>Welcome :)</Text>
        <Button
          color='#008b8b'
          title="About"
          onPress={() => navigation.navigate('About')} />
      </View><View style={{flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#f5fffa' }}>
        <Button style={{ bottom: 0, left: 0 }}
          color='#008b8b'
          title="Tasks"
          onPress={() => navigation.navigate('Current tasks')} />
          <Button style={{ bottom: 0, right: 0 }}
          color='#008b8b'
          title="Games"
          onPress={() => navigation.navigate('Minigames')} />
        </View></>
      
    );
  }

  export {HomeScreen}