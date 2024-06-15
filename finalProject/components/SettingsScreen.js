import * as React from 'react';
import { View, Text } from 'react-native';
import styles from './Styles';

function SettingsScreen() {
    return (
      <View style={[styles.container, {flex: 'auto'}]}>
        <Text style={styles.text}>Change settings such as username, notifications, etc.</Text>
      </View>
    );
  }

  export default SettingsScreen