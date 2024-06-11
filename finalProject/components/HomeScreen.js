import * as React from 'react';
import { Button, View, Text } from 'react-native';

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

  export {HomeScreen}