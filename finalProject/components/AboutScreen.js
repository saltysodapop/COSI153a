import * as React from 'react';
import { View, Text } from 'react-native';
import styles from './Styles';

function AboutScreen() {
    return (
      <View style={[styles.container, {flex: 1, justifyContent: 'flex-start', padding: 60}]}>
        <Text style={styles.text}>
          BitTasker is a time management app that allows users to set tasks to do and goals to work toward.
          It features a few fun minigames to reward users for making progress on their tasks and motivate them to keep doing their best!
        </Text>
        <Text> </Text>
        <Text style={styles.text}>
          The minigames will be very simple, designed to take only a couple of minutes to play so they don't become distracting.
          Users are allowed to play one minigame each day as a "freebie," but the games can be unlocked and played again by spending "task tokens."
          Users can earn task tokens by completing or making progress on their current tasks.
          Then, once they've saved enough tokens, users can pick a minigame to play again!
        </Text>
        <Text> </Text>
        <Text> </Text>
        <Text style={styles.text}>Make everyday tasks a little bit more fun with BitTasker! :)</Text>
      </View>
    );
  }

  export default AboutScreen