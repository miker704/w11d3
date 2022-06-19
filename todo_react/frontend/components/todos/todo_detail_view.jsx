import React from "react";
import StepListContainer from "../steps/step_list_container.jsx";

class TodoDetailView extends React.Component{
   
    render(){   
        const {todo,removeTodo} =this.props;

        return(
            <div>
                <p className="todo-body">{todo.body}</p>
                <StepListContainer todo_id={todo_id}/>
                <button className="delete-button" onClick={removeTodo}>Delete Todo</button>
            </div>
        )
    }
}


export default TodoDetailView;
