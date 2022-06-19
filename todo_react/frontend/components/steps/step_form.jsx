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
            <div>

            </div>
        )
    } 
}

export default StepForm;
