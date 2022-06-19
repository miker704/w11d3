import React from "react";



class StepListItem extends React.Component{
    constructor(props){
        super(props);
        this.toggleDetail = this.toggleDetail.bind(this);
        this.toggleStep = this.toggleStep.bind(this);
    }

    
    toggleDetail(e) {
        e.preventDefault();
        this.setState({ detail: !this.state.detail });

    }
    toggleTodo(e) {
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
