import * as React from 'react';
import { View, Text } from 'react-native';
import styles from './Styles';

function AboutScreen() {
    return (
      <View style={[styles.container, {flex: 'auto'}]}>
        <Text style={styles.text}>About page</Text>
      </View>
    );
  }

  export default AboutScreen