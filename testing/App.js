import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';

const Item = ({ item }) => (
    <View style={styles.item}>
        <Text>{item}</Text>
        <Button title='done'></Button>
    </View>
);

const ToDo = () => {
    const [todo, setTodo] = useState('');
    const [counter, setCounter] = useState(0);
}

const ToDoList = () => {
    const [todos, setTodos] = useState([]);
    const [todo, setTodo] = useState('');
    const [counter, setCounter] = useState(0);

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
                    setTodos([...todos, todo]);
                    setTodo('');
                    setCounter(counter+1)
                }} />
            <Text>
                {todos}
            </Text>
            <FlatList
                data={todos}
                renderItem={({item}) =>  <Item item={item}/> }
                keyExtractor={item => item}
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