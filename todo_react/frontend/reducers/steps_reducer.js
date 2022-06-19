import { RECEIVE_STEP, RECEIVE_STEPS, REMOVE_STEP } from "../actions/step_actions.js";




// const stepsReducer = (state = {}, action) => {


// 	Object.freeze(state);
// 	let nextState = Object.assign({}, state);
// 	switch (action.type) {

// 		case RECEIVE_STEP:
// 			// newState[action.step.id]=action.step;
// 			const newStep = { [action.step.id]: action.step };
// 			nextState = Object.assign({}, state, newStep);
// 			return nextState;
// 		case RECEIVE_STEPS:
// 			// newState[action.steps.id]=action.steps;

// 			action.steps.forEach(
// 				(step) => {
// 				nextState[step.id] = step;
// 			});
// 			return nextState;
// 		case REMOVE_STEP:
// 			delete nextState[action.step.id];
// 			return nextState;
// 		default:
// 			return state;

// 	}


// };


const stepsReducer = (state = {}, action) => {
	Object.freeze(state);
	let nextState = Object.assign({}, state);
//   let nextState;
	switch(action.type) {
	  case RECEIVE_STEPS:
		action.steps.forEach(step => {
		  nextState[step.id] = step;
		});
		return nextState;
	  case RECEIVE_STEP:
		const newStep = {[action.step.id]: action.step};
		nextState = Object.assign({}, state, newStep);
		return nextState;
	  case REMOVE_STEP:
		delete nextState[action.step.id];
		return nextState;
	  default:
		return state;
	}
  }


export default stepsReducer;

// Sample State Shape
// {
//   1: {
//     title: "walk to store",
//     done: false
//   },
//   2: {
//     title: "buy soap",
//     done: false
//   },
//   3: {
//     title: "walk to park",
//     done: false
//   },
//   4: {
//     title: "play with dog",
//     done: false
//   }
// };
