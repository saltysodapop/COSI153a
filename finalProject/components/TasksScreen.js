import React, {useState} from 'react';
import { View, Text, TextInput, Button, FlatList } from 'react-native';
import styles from './Styles';
import { RenderTask } from './RenderTask';

function TasksScreen() {
    const [tasks, setTasks] = useState([]);
    const [task, setTask] = useState('');
    const [changes, setChanges] = useState(0);

    const incrChanges = () => {
      setChanges(changes+1);
    }

    return (
      <><View style={[styles.container, { flex: 1, paddingTop: 120 }]}>
        <Text style={styles.text}>Add a new task</Text>
        <TextInput
          style={{ height: 40, borderColor: '#483d8b', borderWidth: 2 }}
          onChangeText={text => setTask(text)}
          value={task} />
        <Button
          color='#008b8b'
          title="new task"
          onPress={() => {
            let date = Date();
            let task_item = {title:task, completed:false, date:date};
            setTasks(tasks.concat(task_item));
            setTask('');
          } } />
        <Text> </Text>
        <Text style={[styles.text, {textDecorationLine: 'underline'}]}>Task List:</Text>
        <FlatList
                data={tasks}
                extraData={changes}
                renderItem={({item}) =>  <RenderTask task={item} incrChanges={incrChanges}/> }
                keyExtractor={item => item['date']} />
      </View><View style={[styles.container, {flexDirection: 'row-reverse', justifyContent: 'flex-start'}]}>
          <Button style={{ bottom: 0, right: 0 }}
            color='#008b8b'
            title="Home"
            onPress={() => navigation.navigate('Home')} />
        </View></>
    );
  }

  export default TasksScreen