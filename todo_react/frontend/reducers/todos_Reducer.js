import {
    RECEIVE_TODOS,
    RECEIVE_TODO,
    REMOVE_TODO
} from '../actions/todo_actions.js';

// import merge from 'lodash/mer'



const todosReducer = (state = {}, action) => {
// const todosReducer = (state = initialState, action) => {

    Object.freeze(state);
    // let nextState;
    let nextState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_TODOS:
            // nextState[action.todos.id] = action.todos;
            // const newState = {nextState[action.todos.id] :action.todos}
            // action.todos.forEach(
            //     (todo) => {
            //     nextState[todo.id] = todo;
            //   });

            action.todos.forEach(todo => {
                nextState[todo.id] = todo;
            });
            return nextState;
        // return newState;
        case RECEIVE_TODO:
            // nextState[action.todo.id] = action.todo;

            const newTodo = { [action.todo.id]: action.todo };
            nextState = Object.assign({}, state, newTodo);
            return nextState;
        // return nextState;
        case REMOVE_TODO:
            delete nextState[action.todo.id];
            return nextState;
        default:
            return state;
    }

    

    // Object.freeze(state);
    // let nextState;
  
    // switch(action.type){
    //   case RECEIVE_TODOS:
    //     nextState = {};
    //     action.todos.forEach(todo => nextState[todo.id] = todo);
    //     return nextState;
    //   case RECEIVE_TODO:
    //     const newTodo = {[action.todo.id]: action.todo};
    //     return merge({}, state, newTodo);
    //   case REMOVE_TODO:
    //     nextState = merge({}, state);
    //     delete nextState[action.todo.id];
    //     return nextState;
    //   default:
    //     return state;
    // }




};

const initialState = {
    1: {
        id: 1,
        title: "wash car",
        body: "with soap",
        done: false
    },
    2: {
        id: 2,
        title: "wash dog",
        body: "with shampoo",
        done: true
    }
};
export default todosReducer;