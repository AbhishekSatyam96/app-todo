import React from 'react';
import { AsyncStorage, Button } from 'react-native';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

const TodoList = (props) => {
    const getId = async() => {
        const id = await AsyncStorage.getItem('id');
        console.log("here id", id);
    }
    getId();
    console.log("props of todolist",props);
    return (
        <>
            <Button 
                title="Create Todo"
                onPress={() => props.navigation.navigate("TodoForm")}
            />
        </>
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

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);