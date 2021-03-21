import React, { useEffect } from 'react';
import {
    AsyncStorage, Button, SafeAreaView, FlatList, StyleSheet, View, Text
} from 'react-native';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { editTodo } from '../redux/actions/TodoActions';

const editTask = (task, description) => {
    const payload = {
        task,
        description
    }
    console.log("edit payload", payload);
}

const TodoList = (props) => {
    useEffect(() => {
        const getId = async () => {
            const id = await AsyncStorage.getItem('id');
            console.log("here id", id);
        }
        getId();
    }, [])

    const Item = ({ title, description }) => (
        <View style={styles.item}>
            <Text style={styles.title}>{title}</Text>
            <Text>{description}</Text>
            <Button
                title="Edit"
                onPress={() => props.navigation.navigate("TodoForm", {
                    task: title,
                    description
                })}
            />
            <Button
                title="Delete"
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
            <Item title={item.task} description={item.description} />)
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
                onPress={signOut}
                title="LogOut"
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
            // deleteBill
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
        fontSize: 32,
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);