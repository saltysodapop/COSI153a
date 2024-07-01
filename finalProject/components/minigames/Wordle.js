import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, StyleSheet, Button, Platform } from 'react-native';
import words5 from '../assets/words5a';
import {pick_random_word,analyze_guess} from '../lib/words';
import GuessList from './GuessList';
import WordleButton from './WordleButton';
import styles from '../Styles';

const App = ({ navigation }) => {
  const [word, setWord] = useState(pick_random_word(words5));
  const [guessNum, setGuessNum] = useState(0)
  const [guess, setGuess] = useState("");
  const [gameOver, setGameOver] = useState(false);
  const [guesses, setGuesses] = useState([]);

const validateGuess = (guess) =>{
       return guess.length ==5;
};

  return (
    <>{Platform.OS === 'android' ? (<View style = {styles.container}><Text style={{fontSize:16}}></Text></View>) : (<View style={styles.container}/>)}
      <View style={[styles.container, { flexDirection: 'row', justifyContent: 'flex-start' }]}>
      <Button
        color='#008b8b'
        title="back"
        onPress={() => navigation.navigate('Minigames')} />
    </View>
    <View style={[styles.container, {flex: 1, paddingTop: 120}]}>
      {gameOver?
        <Text> </Text>
         : 
      <>
        <Text style={styles.text}> Make a guess </Text>
        <View>
            <TextInput  
                style={styles.input}
                autoCapitalize='none'
                onChangeText={text => setGuess(text)}
                value={guess}
            />
        </View>
        <WordleButton 
            title="Check Guess" 
            onPress = {() => {
                  {/* jake - you win alert */}
                  if (guess.toLowerCase() == word) {
                      setGuesses(guesses.concat(guess));
                      
                      alert('You guessed the word ' + word + ' in ' + (guessNum+1)+ ((guessNum==0)?' guess':' guesses'));
                      setGuessNum(guessNum+1);
                      setGameOver(true);
                  
                  } else if (!words5.includes(guess.toLowerCase()) ){ /* check that the guess is in the array wards5*/
                      alert('Your guess is not a valid word. Please try again.');
                  }else if (guessNum == 5 && guess != word) {
                    alert('You have already submitted the maximum number of guesses. The word was '+word);
                    setGameOver(true);
                    setGuesses(guesses.concat(guess));
                    
                  } else {
                    setGuesses(guesses.concat(guess));
                    setGuessNum(guessNum+1);
                  }
                  setGuess(''); {/* jake - clear the guess box after each guess */}
                  }}/>
    </>
      }
        <GuessList word={word} guesses={guesses} />
    </View></>
  );
};

export default App;  

