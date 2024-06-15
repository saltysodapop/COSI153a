import React, {useState} from 'react';
import { View, Text, TextInput, Button, FlatList } from 'react-native';
import styles from './Styles';

function TasksScreen() {
    const [tasks, setTasks] = useState([]);
    const [task, setTask] = useState('');

    return (
      <><View style={[styles.container, { flex: 1 }]}>
        <Text>Add a new task</Text>
        <TextInput
          style={{ height: 40, borderColor: '#483d8b', borderWidth: 2 }}
          onChangeText={text => setTask(text)}
          value={task} />
        <Button
          color='#008b8b'
          title="new task"
          onPress={() => {
            setTasks([...tasks, task]);
            setTask('');
          } } />
        <Text>
          {tasks}
        </Text>
      </View><View style={[styles.container, {flexDirection: 'row-reverse', justifyContent: 'flex-start'}]}>
          <Button style={{ bottom: 0, right: 0 }}
            color='#008b8b'
            title="Home"
            onPress={() => navigation.navigate('Home')} />
        </View></>
    );
  }

  export default TasksScreen