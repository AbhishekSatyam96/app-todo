import {ACTION_TYPES} from '../actions/ActionTypes';
let initialState = {
    todoData: [
        {
            "Task": 'Fist Task',
            "Description": 'First Description'
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