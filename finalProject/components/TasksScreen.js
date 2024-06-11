import React, {useState} from 'react';
import { View, Text, TextInput, Button, FlatList } from 'react-native';

function TasksScreen() {
    const [tasks, setTasks] = useState([]);
    const [task, setTask] = useState('');

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#f5fffa' }}>
        <Text>Add a new task</Text>
        <TextInput 
            style={{height: 40, borderColor: '#483d8b', borderWidth: 2}}
            onChangeText={text => setTask(text)}
            value={task} />
        <Button
            color='#008b8b'
            title="new task"
            onPress={() => {
                setTasks([...tasks, task]);
                setTask('');
            }} />
        <Text>
            {tasks}
        </Text>
      </View>
    );
  }

  export default TasksScreen