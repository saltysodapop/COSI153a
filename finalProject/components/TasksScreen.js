import React, {useState} from 'react';
import { View, Text, TextInput, Button, FlatList, Modal, Platform } from 'react-native';
import styles from './Styles';
import { RenderTask } from './RenderTask';
import {useValue} from './ValueContext';

function TasksScreen({ navigation }) {
    const [task, setTask] = useState('');
    const [changes, setChanges] = useState(0);
    const {currentValue, setCurrentValue} = useValue();
    const [modalVisible, setModalVisible] = useState(false);

    const incrChanges = () => {
      setChanges(changes+1);
    }

    return (
      <>{Platform.OS === 'android' ? (<View style = {styles.container}><Text style={{fontSize:16}}></Text></View>) : (<View style={styles.container}/>)}
        <View style={styles.container}>
          <Text style={{fontSize:6}}> </Text>
        </View><View style={[styles.container, {flexDirection: 'row', justifyContent: 'flex-start'}]}>
          <Text style={styles.text}>  Task tokens: {currentValue.taskTokens}</Text>
        </View><View style={[styles.container, { flex: 1, paddingTop: 120 }]}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          } } >
          <View style= {{alignItems: 'center', justifyContent: 'center', marginTop: 132}}>
            <View style={styles.modalBox}>
              <Text style={[styles.text, {fontWeight: 'bold'}]}>Add new task:</Text>
              <TextInput
                style={styles.input}
                onChangeText={text => setTask(text)}
                value={task}
                placeholder="Enter a task :)" />
              <Button
                color='#008b8b'
                title="add to task list"
                onPress={() => {
                  let date = Date();
                  let task_item = {title:task, completed:false, date:date};
                  setCurrentValue({...currentValue, tasks: currentValue.tasks.concat(task_item)});
                  setTask('');
                  setModalVisible(!modalVisible);
                } } />
              <Button
                color='#008b8b'
                title="back"
                onPress={() => {
                  setModalVisible(!modalVisible)
                  setTask('');
                } } />
              </View>
            </View>
        </Modal>
        <Button
          color='#008b8b'
          title="add new task"
          onPress={() => setModalVisible(true)} />
        <Text> </Text>
        <Text style={[styles.text, styles.separator]}>Task List:</Text>
        <FlatList
                data={currentValue.tasks}
                extraData={changes}
                renderItem={({item}) =>  <RenderTask task={item} incrChanges={incrChanges}/> }
                keyExtractor={item => item['date']} />
      </View><View style={[styles.container, {flexDirection: 'row-reverse', justifyContent: 'flex-start'}]}>
          <Button 
            color='#008b8b'
            title="Home"
            onPress={() => navigation.navigate('Home')} />
        </View></>
    );
  }

  export {TasksScreen}