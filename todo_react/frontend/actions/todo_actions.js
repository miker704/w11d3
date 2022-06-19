// this houses our action creators and action type constants
import * as TodoAPIUtil from '../util/todo_api_util';


export const RECEIVE_TODOS = "RECEIVE_TODOS";
export const receiveTodos = (todos) => {
    
    return {
        type : RECEIVE_TODOS,
        todos: todos
    }
    
}
export const RECEIVE_TODO = "RECEIVE_TODO";
export const receiveTodo = (todo) => {
    return {
    type : RECEIVE_TODO,
    todo : todo
    }
}

export const REMOVE_TODO = "REMOVE_TODO";
export const removeTodo = (todo) => ({
    type: REMOVE_TODO,
    todo: todo
  });
  export const TODO_ERROR = "TODO_ERROR";
  export const todoError = error => ({
    type: TODO_ERROR,
    error
  })

  export const fetchTodos = () => dispatch => (
    TodoAPIUtil.fetchTodos().then(todos => dispatch(receiveTodos(todos)))
  );
  
  export const fetchTodo = id => dispatch => (
    TodoAPIUtil.fetchTodo(id).then(todo => dispatch(receiveTodo(todo)))
  );
  
  export const createTodo = todo => dispatch => (
    TodoAPIUtil.createTodo(todo)
    .then(todo => { dispatch(receiveTodo(todo)); dispatch(removeErrors())},
    err => dispatch(receiveErrors(err.responseJSON)))
  );
  
  export const updateTodo = todo => dispatch => (
    TodoAPIUtil.updateTodo(todo).then(todo => dispatch(receiveTodo(todo)))
  );
  
  export const deleteTodo = todo => dispatch => (
    TodoAPIUtil.destroyTodo(todo).then(todo => dispatch(removeTodo(todo)))
  );