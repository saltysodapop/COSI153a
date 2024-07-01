import * as React from 'react';
import { View, Text, Button, Platform } from 'react-native';
import styles from '../Styles';

function PuzzleSetup ({ navigation }) {
  return (
    <>{Platform.OS === 'android' ? (<View style = {styles.container}><Text style={{fontSize:16}}></Text></View>) : (<View style={styles.container}/>)}
      <View style={[styles.container, { flexDirection: 'row', justifyContent: 'flex-start' }]}>
      <Button
        color='#008b8b'
        title="back"
        onPress={() => navigation.navigate('Minigames')} />
    </View><View style={[styles.container, { flex: 1, padding: 60, justifyContent: 'space-evenly' }]}>
      <Text style={styles.text}>Would you like to build an existing puzzle or make your own?</Text>
      <View style={[styles.container, { gap: 100, flexDirection: 'row' }]}>
        <Button
          color='#008b8b'
          title="existing"
          onPress={() => navigation.navigate('Puzzle')}  />
        <Button
          color='#008b8b'
          title="custom"
          disabled />
      </View>
      <Text style={styles.text}> </Text>
    </View></>
  );
}

export {PuzzleSetup}