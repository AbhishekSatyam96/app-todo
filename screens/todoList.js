import React, { useEffect } from 'react';
import {
    AsyncStorage, Button, SafeAreaView, FlatList, StyleSheet, View, Text
} from 'react-native';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { deleteTodo } from '../redux/actions/TodoActions';

const TodoList = (props) => {
    useEffect(() => {
        const getId = async () => {
            const id = await AsyncStorage.getItem('id');
            console.log("here id", id);
        }
        getId();
    }, [])

    const removeTodo = (id) => {
        props.deleteTodo(id);
    }

    const Item = ({ title, description, id }) => (
        <View style={styles.item}>
            <Text style={styles.title}>Task name: {title}</Text>
            <Text style={styles.description}> Description: {description}</Text>
            <Button
                title="Edit"
                onPress={() => props.navigation.navigate("TodoForm", {
                    task: title,
                    description,
                    id
                })}
            />
            <Button
                title="Delete"
                onPress={() => removeTodo(id)}
            />
        </View>
    );

    const signOut = async () => {
        await GoogleSignin.revokeAccess();
        await GoogleSignin.signOut();
        props.navigation.navigate("Login");
    }

    console.log("props of todolist", props);
    const renderItem = ({ item }) => {
        console.log("item", item);
        return (
            <Item title={item.task} description={item.description} id={item.id} />)
    };

    return (
        <SafeAreaView>
            <Button
                title="Create Todo"
                onPress={() => props.navigation.navigate("TodoForm")}
            />
            <FlatList
                data={props.todoData}
                renderItem={renderItem}
                keyExtractor={item => item.task}
            />
            <Button
                title="LogOut"
                onPress={() => signOut}
            />
        </SafeAreaView>
    )
}

const mapStateToProps = state => {
    return {
        todoData: state.TodoState.todoData
    };
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        {
            deleteTodo
        },
        dispatch
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 24,
        color: 'red'
    },
    description: {
        fontSize: 16,
        color: 'green'
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);