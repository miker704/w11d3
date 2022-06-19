import React from "react";


class TodoListItem extends React.Component {


    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <li className="TodoListItem">{this.props.todo.title}</li>
                <button></button>
            </div>
        )
    }

}

export default TodoListItem;