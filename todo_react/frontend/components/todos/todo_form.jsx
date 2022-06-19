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
        this.setState({title: "",body:"",tag_names:[]});
    }

    removeTag(idx){
        this.setState({
           tag_names: this.state.tag_names.filter((_,index) => index !==idx)

        })
    }

    render() {
        const tag_names = this.state.tag_names.map((tag,idx) => {
            const clickHandler = () => this.removeTag(idx);
            return <li key={idx} onClick={clickHandler}>{tag}</li>
        })
        return (

            <form onSubmit={this.handleSubmit}>
                <label>Create New Todo</label> <br />
                <label>Todo Name: <input id="titleinput" type="text" onChange={this.update('title')} value={this.state.title} /> <br /></label>
                
                <label>Todo Body: <textarea id="bodyinput" cols="20" rows="1" onChange={this.update('body') }value={this.state.body}></textarea> <br /></label>
                <label>Tags: <input id="titleinput" type="text" onChange={this.update('newTag')} value={this.state.newTag} />
                    <button type="button" onClick={this.addTag}>Add Tag</button>
                 <br /></label>
                 <ul>{tag_names}</ul>
                
                <button className="create-button">Create New Todo</button>

            </form>


        )
    }


}
export default TodoForm;