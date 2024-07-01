import * as React from 'react';
import { View, Text, Button, Platform } from 'react-native';
import styles from './Styles';
import {useValue} from './ValueContext';

function GamesScreen({ navigation }) {
    const {currentValue, setCurrentValue} = useValue();

    return (
      <>{Platform.OS === 'android' ? (<View style = {styles.container}><Text style={{fontSize:16}}></Text></View>) : (<View style={styles.container}/>)}
        <View style={styles.container}>
          <Text style={{fontSize:6}}> </Text>
        </View><View style={[styles.container, {flexDirection: 'row', justifyContent: 'flex-start'}]}>
          <Text style={styles.text}>  Task tokens: {currentValue.taskTokens}</Text>
        </View><View style={[styles.container, {flex: 1}]}>
          <View style={{ position: 'absolute', top: '30%', right: '20%' }}>
            {currentValue.taskTokens < 5 ? (
              <Text style={styles.text}>Not enough tokens!</Text>
            ) : (
              <Text style={styles.text}>Pick a minigame!</Text>
            )}
          </View>
          <View style={[styles.box, {backgroundColor: '#2e4666',  top: '25%', left: '15%'}]}>
            <Button
              color='#008b8b'
              title="puzzle"
              disabled={currentValue.taskTokens < 5}
              onPress={() => {
                setCurrentValue({...currentValue, taskTokens: currentValue['taskTokens']-5})
                navigation.navigate('PuzzleSetup')
              }} />
          </View>
          <View style={[styles.box, {backgroundColor: '#41618c'}]}>
            <Button
              color='#008b8b'
              title="wordle"
              disabled={currentValue.taskTokens < 5}
              onPress={() => {
                setCurrentValue({...currentValue, taskTokens: currentValue['taskTokens']-5})
                navigation.navigate('Wordle')
              }} />
          </View>
          <View style={[styles.box, {backgroundColor: '#6591CF', bottom: '25%', right: '15%'}]}>
            <Button
              color='#008b8b'
              title="game 3"
              disabled
              onPress={() => {
                setCurrentValue({...currentValue, taskTokens: currentValue['taskTokens']-5})
              }} />
            <Text style={[styles.text, {color: 'white'}]}> More games coming soon!</Text>
          </View>
      </View><View style={[styles.container, {flexDirection: 'row', justifyContent: 'flex-start'}]}>
          <Button 
            color='#008b8b'
            title="Home"
            onPress={() => navigation.navigate('Home')} />
        </View></>
    );
  }

  export {GamesScreen}