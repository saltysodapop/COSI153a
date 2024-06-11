import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';

const Item = ({ item, incrChanges }) => (
    <View style={styles.item}>
        <Text>{item['count']} {item['title']} {item['date']}</Text>
        <Button title="Done" onPress={() => {
              item['completed']=true;
              incrChanges()}} />
        <Text>{item['completed']?'done':''}</Text>
    </View>
);

const ToDoList = () => {
    const [todos, setTodos] = useState([]);
    const [todo, setTodo] = useState('');
    const [count, setCount] = useState(1);
    const [changes, setChanges] = useState(0);

    const incrChanges = () => {
        setChanges(changes+1);
    }

    return (
        <View style={styles.container}>
            <Text>ToDo List</Text>
            <TextInput 
                style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                onChangeText={text => setTodo(text)}
                value={todo} />
            <Button
                title="Add ToDo"
                onPress={() => {
                    setCount(count+1);
                    let date = Date();
                    let todo_item = {count: count, title:todo, date:date, completed:false};
                    setTodos(todos.concat(todo_item));
                    setTodo('');
                }} />
            <FlatList
                data={todos.filter(item => !item['completed'])}
                extraData={changes}
                renderItem={({item}) =>  <Item item={item} incrChanges={incrChanges}/> }
                keyExtractor={item => item['count']}
             />

        </View>
    );
    }


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    item: {
        backgroundColor: '#fffacd',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderColor:'royalblue',
        borderWidth: 2,
    },
});

export default ToDoList;