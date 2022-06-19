import React from "react";

class TodoForm extends React.Component {

    constructor(props) {
        super(props);
        this.update = this.update.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = this.props.todo;
    }

    update(field) {
        return e => {
            this.setState({ [field]: e.currentTarget.value })
        }
    }

    handleSubmit() {
        this.props.receiveTodo(todo);
    }



    render() {
        return (

            <form onSubmit={this.handleSubmit}>
                    <label>Create New Todo</label> <br />
                    <label>Todo Name: </label>
                    <input type="text" onChange={this.update('title')}/>
                    <button>Create New Todo</button>


            </form>


        )
    }


}
export default TodoForm;