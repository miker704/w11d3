import React from "react";
import uniqueId from "../../util/id_gen.js";

class TodoForm extends React.Component {

    constructor(props) {
        super(props);
        this.update = this.update.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = { title: "", body: "", done: false };
    }

    update(field) {
        return e => {
            this.setState({ [field]: e.currentTarget.value })
        }
    }

    handleSubmit() {
        const todo = Object.assign({}, this.state({ id: uniqueId() }));
        this.props.receiveTodo(todo);
        this.setState({title: "",body:""});
    }



    render() {
        return (

            <form onSubmit={this.handleSubmit}>
                <label>Create New Todo</label> <br />
                <label>Todo Name: </label>
                <input id="titleinput" type="text" onChange={this.update('title')} value={this.state.title} /> <br />
                <label>Todo Body: </label>
                <textarea id="bodyinput" cols="20" rows="1" onChange={(this.update('body')) }value={this.state.body}></textarea> <br />
                <button className="create-button">Create New Todo</button>

            </form>


        )
    }


}
export default TodoForm;