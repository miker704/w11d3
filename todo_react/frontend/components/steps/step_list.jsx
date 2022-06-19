import React from "react";
import { receiveStep } from "../../actions/step_actions";

class StepList extends React.Component{
    constructor(props){
        super(props);
    }
    render(){

        const stepList = ({steps,todo_id, receiveStep}) =>{
            const stepItems = steps.map((step) => {
                return <StepListItemContainer key={step.id} step={step}/>
            })
        };



        return (
            <div>
            <ul className="stepList">
                {stepItems}
                </ul>      
                 <StepForm todo_id={todo_id} receiveStep={receiveStep}/>
            </div>
        )
    }
}

export default StepList;