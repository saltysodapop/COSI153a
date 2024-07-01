import * as React from 'react';
import { View, Text, Button, Platform } from 'react-native';
import styles from '../Styles';
import SlidePuzzle from './SlidePuzzle';

function PuzzleGame ({ navigation }) {
  return (
    <>{Platform.OS === 'android' ? (<View style = {styles.container}><Text style={{fontSize:16}}></Text></View>) : (<View style={styles.container}/>)}
      <View style={[styles.container, { flexDirection: 'row', justifyContent: 'flex-start' }]}>
      <Button
        color='#008b8b'
        title="back"
        onPress={() => navigation.navigate('Minigames')} />
    </View><SlidePuzzle/>
    </>
  );
}

export {PuzzleGame}