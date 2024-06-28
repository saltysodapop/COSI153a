import React, {useState} from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import styles from './Styles';
import {useValue} from './ValueContext';
import regeneratorRuntime from "regenerator-runtime";
import storage from './Storage';   

function SettingsScreen({ navigation }) {
    const [showChangeUsername, setShowChangeUsername] = useState(false);
    const {currentValue, setCurrentValue} = useValue();
    const debug = false;

    const clearAll = async () => {
      try {
        console.log('in clearData')
        await storage.clearMapForKey('sharedData');
      } catch(e) {
        console.log("error in clearAll ")
        console.dir(e)
        // clear error
      }
    }

    return (
      <><View style={[styles.container, { flex: 1, justifyContent: 'flex-start', alignItems: 'flex-start', padding: 60 }]}>
        <Text style={styles.text}>Notifications: On/Off</Text>
        <Text style={styles.text}>User Info:</Text>
        <Text style={styles.text}>    Username: {currentValue.username}</Text>
        {showChangeUsername ? (
          <><TextInput
            style={[styles.input, { height: 'auto' }]}
            placeholder="Enter new username"
            onChangeText={text => setCurrentValue({...currentValue, username: text})} />
          <Button
            color='#008b8b'
            title="change username"
            onPress={() => setShowChangeUsername(false)} /></>
        ) : (
          <Button
          color='#008b8b'
          title="change username?"
          onPress={() => setShowChangeUsername(true)} />
        )}
        <Text style={styles.text}>    Birthday: 00/00</Text>
        {debug ?
          <Button
            title="Clear"
            color='#008b8b'
            onPress = {() => {clearAll()}}/> : <Text> </Text>
        }
      </View><View style={[styles.container, { padding: 100 }]}>
        <Button
            color='#008b8b'
            title="About"
            onPress={() => navigation.navigate('About')} />
        </View></>
    );
  }

  export {SettingsScreen}