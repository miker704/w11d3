import React from "react";



class StepListItem extends React.Component{
    constructor(props){
        super(props);
     
        this.toggleStep = this.toggleStep.bind(this);
    }

   
    toggleStep(e) {
        e.preventDefault();
        const toggledStep = Object.assign({}, this.props.step, { done: !this.props.step.done })
        this.props.receiveStep(toggledStep);
    }


    render(){
        return(
            <li className="step-header">
            <div className="step-info">
            <h3>{this.props.step.title}</h3>
            <p>{this.props.step.body}</p>
            </div>
            <div className="step-buttons">
            <button className={this.props.step.done ? "done" : "undone"} onClick={this.toggleStep}>{this.props.step.done ? "done" : "undone"}</button>
            </div>
            <button className="delete-button" onClick={this.props.removeStep}>Delete</button>
            
        </li>
        )
    } 
}

export default StepListItem;
