import React from 'react';
import {
    Button, SafeAreaView, FlatList, StyleSheet, View, Text
} from 'react-native';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { deleteTodo } from '../redux/actions/TodoActions';

const TodoList = (props) => {

    const removeTodo = (id) => {
        props.deleteTodo(id);
    }

    const Item = ({ title, description, id }) => (
        <View style={styles.item}>
            <Text style={styles.title}>Task name: {title}</Text>
            <Text style={styles.description}> Description: {description}</Text>
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', marginTop: 10 }}>
                <View
                    style={{ marginRight: 20 }}
                >
                    <Button
                        title="Edit"
                        onPress={() => props.navigation.navigate("TodoForm", {
                            task: title,
                            description,
                            id
                        })}
                    />
                </View>
                <Button
                    title="Delete"
                    onPress={() => removeTodo(id)}
                />
            </View>
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
            <Text
                style={{
                    fontSize: 16,
                    textAlign: 'center',
                    margin: 10,
                    padding: 10,
                    fontWeight: 'bold'
                }}
            >Welcome {props.route.params.userName}</Text>
            <Button
                title="Create Todo"
                onPress={() => props.navigation.navigate("TodoForm", {
                    userId: props.route.params.userId
                })}
            />
            <FlatList
                data={props.todoData}
                // data={userData}
                renderItem={renderItem}
                keyExtractor={item => item.task}
            />
            <Button
                title="LogOut"
                onPress={signOut}
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