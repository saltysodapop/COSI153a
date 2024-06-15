import * as React from 'react';
import { Button, View, Text } from 'react-native';
import styles from './Styles';

function HomeScreen({ navigation }) {
    return (
      <><View style={[styles.container, {flexDirection: 'row-reverse', justifyContent: 'flex-start'}]}>
          <Button style={{ top: 0, right: 0 }}
          color='#008b8b'
          title="Settings"
          onPress={() => navigation.navigate('Settings')} />
        </View><View style={[styles.container, { flex: 1, justifyContent: 'space-evenly' }]}>
        <Text style={[styles.text, {fontSize: 17}]}>Welcome :)</Text>
        <Button
          color='#008b8b'
          title="About"
          onPress={() => navigation.navigate('About')} />
      </View><View style={[styles.container, { flexDirection: 'row', justifyContent: 'space-between'}]}>
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