import lib from "@babel/preset-env";
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
                <StepListContainer todo_id={todo.id}/>
                <button className="delete-button" onClick={removeTodo}>Delete Todo</button>
                <ul>{todo.tags.map(tag => <li key={tag.id}>{tag.name}</li>)}</ul>
            </div>
        )
    }
}


export default TodoDetailView;
