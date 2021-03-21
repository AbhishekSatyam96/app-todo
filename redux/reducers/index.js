import { combineReducers } from 'redux';
import TodoReducer from './TodoReducer';

const rootReducer = combineReducers({
    TodoState: TodoReducer 
})

export default rootReducer;