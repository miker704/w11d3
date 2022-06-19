
import React from "react";
import StepListContainer from "../steps/step_list_container.jsx";

class TodoDetailView extends React.Component{
//    componentDidMount(){
//     this.props.receiveSteps();
//    }
    render(){   
        const {todo,removeTodo} =this.props;

        return(
            <div className="todo-detail-view">
                <p className="todo-body">{todo.body}</p>
                <StepListContainer todo_id={todo.id}/> <br />
                <button className="delete-button" onClick={removeTodo}>Delete Todo</button>
                
            </div>
        )
    }
}


export default TodoDetailView;
