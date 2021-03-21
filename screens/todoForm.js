import React, { useState, useEffect } from 'react';
import { View, TextInput, StyleSheet, Button, AsyncStorage } from 'react-native';
import { addTodo, editTodo } from '../redux/actions/TodoActions';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

const TodoForm = (props) => {
    const [task, setTask] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        if (props.route.params?.task) {
            setTask(props.route.params.task);
            setDescription(props.route.params.description);
        }
    }, [])

    const createTodo = async() => {
        if (props.route.params?.task) {
            const payload = {
                task,
                description,
                id: props.route.params.id
            }
            await props.editTodo(payload)
        } else {
            const payload = {
                id: props.todoData.length + 1,
                task,
                description,
            }
            await props.addTodo(payload);
            console.log("all data", props.todoData);
            AsyncStorage.setItem(props.route.params.userId, JSON.stringify(props.todoData))
        }
        props.navigation.navigate("TodoList");
    }
    console.log("props of todoForm", props);
    // AsyncStorage.setItem(props.route.params.userId, props.todoData)
    return (
        <View
            style={styles.container}
        >
            <TextInput
                style={styles.input}
                placeholder="Task name"
                value={task}
                onChangeText={val => setTask(val)}
            />
            <TextInput
                style={styles.input}
                placeholder="Description"
                value={description}
                onChangeText={val => setDescription(val)}
            />
            <Button
                title={props.route.params.task ? 'Edit Todo' : 'Add Todo'}
                onPress={createTodo}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        height: 40,
        width: '80%',
        margin: 12,
        borderWidth: 1,
    },
});

const mapStateToProps = state => {
    return {
        todoData: state.TodoState.todoData
    };
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        {
            addTodo,
            editTodo
        },
        dispatch
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);