// this houses our action creators and action type constants



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
