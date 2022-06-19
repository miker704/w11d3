import React from "react";



class StepForm extends React.Component{
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value });
    
    }
    handleSubmit(e) {
        e.preventDefault();
        const step = Object.assign({}, this.state,{ id: uniqueId() });
        this.props.receiveStep(step);
        this.setState({title: "",body:""});
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label>Create New Step</label> <br />
                <label>Title: <input id="titleinput" type="text" onChange={this.update('title')} value={this.state.title} /> <br /></label>
                
                <label>Description: <textarea id="bodyinput" cols="20" rows="1" onChange={this.update('body') }value={this.state.body}></textarea> <br /></label>
                
                <button className="create-button">Create Step</button>

            </form>
        )
    } 
}

export default StepForm;
