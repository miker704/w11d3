import { combineReducers } from "redux";
import todosReducer from "./todos_Reducer.js";
import stepsReducer from "./steps_reducer.js";
import errorsReducer from "./error_reducer.js";

const rootReducer = combineReducers({
    todos: todosReducer,
    steps: stepsReducer,
    error: errorReducer

})

export default rootReducer;
