import { combineReducers } from "redux";
import todosReducer from "./todos_Reducer.js";
import stepsReducer from "./steps_reducer.js";


const rootReducer = combineReducers({
    todos: todosReducer,
    steps: stepsReducer,
  

})

export default rootReducer;
