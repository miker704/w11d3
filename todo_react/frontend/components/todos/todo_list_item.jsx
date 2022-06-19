import React from "react";


class TodoListItem extends React.Component{


    constructor(props){
        super(props);
    }

    render(){
        return (
                <li className="TodoListItem">{this.props.todo.title}</li>
                )
    }

}

export default TodoListItem;