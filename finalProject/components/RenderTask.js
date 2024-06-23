import React from 'react';
import { View, Text, Button } from 'react-native';
import styles from './Styles';
import {useValue} from './ValueContext';

function RenderTask ({ task, incrChanges }) {
    const {currentValue, setCurrentValue} = useValue();

    return (
      <View style={task['completed'] ? styles.complete : styles.wip}>
          <Button color='#008b8b' title="done"
            disabled={task['completed']}
            onPress={() => {
              task['completed']=true;
              setCurrentValue({...currentValue, taskTokens: currentValue['taskTokens']+1})
              incrChanges()}} />
          <Text style={[styles.text, {color: 'black'}]}>   {task['title']}</Text>
      </View>
    );
  }

  export {RenderTask}