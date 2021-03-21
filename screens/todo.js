import React from 'react';
import { Text, AsyncStorage } from 'react-native';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

const Todo = (props) => {
    const getId = async() => {
        const id = await AsyncStorage.getItem('id');
        console.log("here id", id);
    }
    getId();
    console.log("props of todo",props);
    return (
        <Text>I am todo...</Text>
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

export default connect(mapStateToProps, mapDispatchToProps)(Todo);