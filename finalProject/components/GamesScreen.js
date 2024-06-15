import * as React from 'react';
import { View, Text, Button } from 'react-native';
import styles from './Styles';

function GamesScreen() {
    return (
      <><View style={[styles.container, {flex: 1}]}>
        <View style={{ position: 'absolute', top: '30%', right: '20%' }}>
          <Text style={styles.text}>Pick a minigame!</Text>
        </View>
        <View style={[styles.box, {backgroundColor: '#2e4666',  top: '25%', left: '15%'}]}>
          <Button
            color='#008b8b'
            title="game 1" />
        </View>
        <View style={[styles.box, {backgroundColor: '#41618c'}]}>
           <Button
            color='#008b8b'
            title="game 2" />
        </View>
        <View style={[styles.box, {backgroundColor: '#6591CF', bottom: '25%', right: '15%'}]}>
          <Button
            color='#008b8b'
            title="game 3" />
        </View>
      </View><View style={{ flexDirection: 'row', backgroundColor: '#f5fffa' }}>
          <Button style={{ bottom: 0, left: 0 }}
            color='#008b8b'
            title="Home"
            onPress={() => navigation.navigate('Home')} />
        </View></>
    );
  }

  export default GamesScreen