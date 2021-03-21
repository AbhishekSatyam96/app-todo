import { ACTION_TYPES } from './ActionTypes';

export const addTodo = (body) => (dispatch) => {
    dispatch({
        type: ACTION_TYPES.ADD_TODO,
        payload: body
    })
}