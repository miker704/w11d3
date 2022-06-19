import React from "react";



class StepForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { title: "", body: "", done: false, todo_id: this.props.todo_id }
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value });

    }
    handleSubmit(e) {
        e.preventDefault();
        const step = Object.assign({}, this.state, { id: uniqueId() });
        this.props.receiveStep(step);
        this.setState({ title: "", body: "" });
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
              
                <label>Title: <input id="titleinput" type="text" onChange={this.update('title')} value={this.state.title} placeholder="walk to the store"/> <br /></label>

                <label>Description: <textarea id="bodyinput" cols="20" rows="1" onChange={this.update('body')} value={this.state.body}></textarea> <br /></label>

                <button className="create-button">Create Step</button>

            </form>
        )
    }
}

export default StepForm;
