import React from "react";
import uniqueId from "../../util/id_generator.js";

class TodoForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = { title: "", body: "", done: false};
        // this.update = this.update.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.addTag= this.addTag.bind(this)
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value });
    
    }


    handleSubmit(e) {
        e.preventDefault();
        const todo = Object.assign({}, this.state,{ id: uniqueId() });
        this.props.receiveTodo(todo);
        this.setState({title: "",body:""});
    }

    

    render() {
      
        return (

            <form onSubmit={this.handleSubmit}>
                <label>Create New Todo</label> <br />
                <label>Todo Name: <input id="titleinput" type="text" onChange={this.update('title')} value={this.state.title} /> <br /></label>
                
                <label>Todo Body: <textarea id="bodyinput" cols="20" rows="1" onChange={this.update('body') }value={this.state.body}></textarea> <br /></label>
                
            

                
                <button className="create-button">Create New Todo</button>

            </form>


        )
    }


}
export default TodoForm;