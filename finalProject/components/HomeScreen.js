import * as React from 'react';
import { Button, View, Text, Platform } from 'react-native';
import styles from './Styles';
import {useValue} from './ValueContext';

function HomeScreen({ navigation }) {
    const {currentValue} = useValue();

    return (
      <>{Platform.OS === 'android' ? (<View style = {styles.container}><Text style={{fontSize:16}}></Text></View>) : (<View style={styles.container}/>)}
        <View style={[styles.container, {flexDirection: 'row', justifyContent: 'space-between'}]}>
          <Text style={styles.text}>  Task tokens: {currentValue.taskTokens}</Text>
          <Button 
          color='#008b8b'
          title="Settings"
          onPress={() => navigation.navigate('Settings')} />
        </View><View style={[styles.container, { flex: 1, justifyContent: 'space-evenly' }]}>
          <View style={styles.container}>
            <Text style={[styles.text, {fontSize: 17}]}>Welcome {currentValue.username}!</Text>
            <Text style={[styles.text, {fontSize: 17}]}>:)</Text>
          </View>
          <Text style={[styles.text, {fontSize: 17}]}> </Text>
      </View><View style={[styles.container, { flexDirection: 'row', justifyContent: 'space-between'}]}>
        <Button 
          color='#008b8b'
          title="Tasks"
          onPress={() => navigation.navigate('Current tasks')} />
          <Button 
          color='#008b8b'
          title="Games"
          onPress={() => navigation.navigate('Minigames')} />
        </View></>
      
    );
  }

  export {HomeScreen}