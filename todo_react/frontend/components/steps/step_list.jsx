import React from "react";
import { receiveStep } from "../../actions/step_actions";
import StepForm from "./step_form";
import StepListItemContainer from "./step_list_item_container.jsx";

        const StepList = ({steps,todo_id, receiveStep}) =>{
            const stepItems = steps.map((step) => {
                return <StepListItemContainer key={step.id} step={step}/>
            })
        

        return (
            <div>
            <ul className="step-list">
                {stepItems}
                </ul>      
                 <StepForm todo_id={todo_id} receiveStep={receiveStep}/>
            </div>
        )
        };

export default StepList;