import React from 'react';
import { View, Text, Button } from 'react-native';
import styles from './Styles';

const RenderTask = ({ task, incrChanges }) => (
    <View style={styles.wip}>
        <Button color='#008b8b' title="done"
          onPress={() => {
            task['completed']=true;
            incrChanges()}} />
        <Text style={[styles.text, {color: 'black'}]}>   {task['title']}</Text>
    </View>
  );

  export {RenderTask}