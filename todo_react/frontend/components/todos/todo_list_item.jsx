import React from "react";
import TodoDetailViewContainer from "./todo_detail_view_container";

class TodoListItem extends React.Component {


    constructor(props) {
        super(props);
        this.state = {detail: false};
        this.toggleDetail = this.toggleDetail.bind(this);
        this.toggleTodo = this.toggleTodo.bind(this);
    }

    toggleDetail(e){
            e.preventDefault();
            this.setState({detail: !this.state.detail});

    }
    toggleTodo(e){
        e.preventDefault();
        const toggleTodo = Object.assign({},this.props.todo,{done: !this.props.todo.done})
        this.props.receiveTodo(toggleTodo);
    }

    render() {
        const {todo, updateTodo} = this.props;
        const{title,done} =this.props;
        let detail;
        if(this.state.detail){
            detail = <TodoDetailViewContainer todo = {todo}/>
        }


        return (



            <div>
                <li className="TodoListItem">{this.props.todo.title}</li>
                <button></button>
            </div>
        )
    }

}

export default TodoListItem;