import React from "react";

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
                 
            </div>
        )
    }
}

export default StepList;