import React from "react";



class StepListItem extends React.Component{
    constructor(props){
        super(props);
     
        this.toggleStep = this.toggleStep.bind(this);
    }

   
    toggleStep(e) {
        e.preventDefault();
        const toggledTodo = Object.assign({}, this.props.todo, { done: !this.props.todo.done })
        this.props.receiveTodo(toggledTodo);
    }


    render(){
        return(
            <div>

            </div>
        )
    } 
}

export default StepListItem;
