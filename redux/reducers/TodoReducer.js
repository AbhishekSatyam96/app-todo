import { ACTION_TYPES } from '../actions/ActionTypes';
let initialState = {
    todoData: [
        {
            "id": 1,
            "task": 'First Task',
            "description": 'First Description',
        },
        {
            "id": 2,
            "task": 'Second Task',
            "description": 'Second Description',
        }
    ]
}

const TodoReducer = (state = initialState, action) => {
    const {
        payload
    } = action;
    console.log("state.todoData", state.todoData);
    switch (action.type) {
        case ACTION_TYPES.ADD_TODO:
            return {
                ...state,
                todoData: [...state.todoData, payload]
            }
        case ACTION_TYPES.EDIT_TODO:
            return {
                ...state,
                todoData: state.todoData.map((data) => {
                    return data.id === payload.id ? payload : data;
                }),
            }
        default:
            return state;
    }
}

export default TodoReducer;