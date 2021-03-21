import React from 'react';
import { View, TextInput, StyleSheet, Button } from 'react-native';

const TodoForm = () => {
    return (
        <View 
            style={styles.container}
        >
            <TextInput
                style={styles.input}
                placeholder="Task name"
            />
            <TextInput
                style={styles.input}
                placeholder="Description"
            />
            <Button 
                title="Add Todo"
                // onPress={}
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

export default TodoForm;