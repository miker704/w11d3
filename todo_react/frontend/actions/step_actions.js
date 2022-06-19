import * as StepAPIUtil from '../util/step_api_util';

export const RECEIVE_STEPS = "RECEIVE_STEPS";

export const receiveSteps = (steps) => {
	return {
		type: RECEIVE_STEPS,
		steps: steps
	};
};

export const RECEIVE_STEP = "RECEIVE_STEP";
export const receiveStep = (step) => {


	return {
		type: RECEIVE_STEP,
		step: step

	};

};

export const REMOVE_STEP = "REMOVE_STEP";
export const removeStep = (step) => {

	return {

		type: REMOVE_STEP,
		step: step

	};


};



//async 
export const requestSteps = todoId => dispatch => (
	StepAPIUtil.fetchSteps(todoId)
	.then(steps => dispatch(receiveSteps(steps)))
  );
  
  export const createStep = (todoId, step) => dispatch => (
	StepAPIUtil.createStep(todoId, step)
	.then(step => dispatch(receiveStep(step)))
  );
  
  
  export const updateStep = step => dispatch => (
	StepAPIUtil.updateStep(step)
	.then(step => dispatch(receiveStep(step)))
  );
  
  export const destroyStep = step => dispatch => (
	StepAPIUtil.destroyStep(step)
	.then(step => dispatch(removeStep(step)))
  );
  