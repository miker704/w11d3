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
            <div>

            </div>
        )
    } 
}

export default StepListItem;
