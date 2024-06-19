import * as React from 'react';
import { View, Text, Button } from 'react-native';
import styles from './Styles';
import {useValue} from './ValueContext';

function SettingsScreen({ navigation }) {
    const {currentValue, setCurrentValue} = useValue();

    return (
      <><View style={[styles.container, { flex: 1, justifyContent: 'flex-start', alignItems: 'flex-start', padding: 60 }]}>
        <Text style={styles.text}>Notifications: On/Off</Text>
        <Text style={styles.text}>User Info:</Text>
        <Text style={styles.text}>    Username:{currentValue.username}</Text>
      </View><View style={[styles.container, { padding: 100 }]}>
        <Button
            color='#008b8b'
            title="About"
            onPress={() => navigation.navigate('About')} />
        </View></>
    );
  }

  export {SettingsScreen}