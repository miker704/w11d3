import React from "react";


class TodoListItem extends React.Component {


    constructor(props) {
        super(props);
        this.state = {detail: false};
        this.toggleDetail = this.toggleDetail.bind(this);
        this.toggleTodo = this.toggleTodo.bind(this);
    }

    toggleDetail(){
            e.preventDefault();
            this.setState({detail: !this.state.detail});
            
    }
    toggleTodo(){

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