import React from 'react';
import { Text, AsyncStorage } from 'react-native';

const Todo = () => {
    const getId = async() => {
        const id = await AsyncStorage.getItem('id');
        console.log("here id", id);
    }
    getId();
    return (
        <Text>I am todo...</Text>
    )
}

export default Todo;