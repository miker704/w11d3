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
            <li className="TodoListItem">
            <div>
            <h3><a onClick={this.toggleDetail}>{title}</a></h3>
            <button className={done ? "done" : "undone"} onClick={this.toggleTodo}>{done ? "done" : "undone"}</button>
         
            </div>
            {detail}
        </li>
        )
    } 
}

export default StepListItem;
