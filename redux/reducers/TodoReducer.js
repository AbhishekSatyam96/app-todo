import {ACTION_TYPES} from '../actions/ActionTypes';
let initialState = {
    todoData: [
        {
            "Task": 'First Task',
            "Description": 'First Description',
        },
        {
            "Task": 'Second Task',
            "Description": 'Second Description',
        }
    ]
}

const TodoReducer = (state = initialState, action) => {
    const {
        payload
    } = action;
    switch(action.type){
        case ACTION_TYPES.ADD_TODO: 
            return{
                ...state,
                todoData: [...state.todoData, payload]
            }
        default:
            return state;
    }
}

export default TodoReducer;