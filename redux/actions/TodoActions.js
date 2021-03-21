import { ACTION_TYPES } from './ActionTypes';

export const addTodo = (body) => (dispatch) => {
    dispatch({
        type: ACTION_TYPES.ADD_TODO,
        payload: body
    })
}

export const editTodo = (body) => (dispatch) => {
    dispatch({
        type: ACTION_TYPES.EDIT_TODO,
        payload: body
    });
}
