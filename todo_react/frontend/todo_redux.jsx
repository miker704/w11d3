import React from "react";
import ReactDOM from "react-dom";

import configureStore from "./store/store.js";
// import {RECEIVE_TODO,RECEIVE_TODOS} from "./actions/todo_actions.js";
import { receiveTodos, receiveTodo, removeTodo } from "./actions/todo_actions.js";
import {receiveStep, receiveSteps, removeStep} from "./actions/step_actions.js";
import App from "./components/app.jsx";
import Root from "./components/root.jsx";
import {allTodos} from "./reducers/selectors.js";


document.addEventListener("DOMContentLoaded", () => {

    console.log("todoreduxlistener triggered");
    const store = configureStore();
    window.store = store;
    window.receiveTodos = receiveTodos;
    window.receiveTodo = receiveTodo;
    window.removeTodo = removeTodo;
    window.receiveStep = receiveStep;
    window.receiveSteps = receiveSteps;
    window.removeStep = removeStep;
    window.allTodos = allTodos;




    // ReactDOM.render(
    //     <h1>Todo App in React && Redux</h1>,
    //     document.getElementById('content')
    // );
  //  ReactDOM.render(
    //    <App/>,
      //  document.getElementById('content')
   // );
	
     ReactDOM.render(
		<Root store={store}/>,
	     	document.getElementById('content')
	
     );
	
	
});
