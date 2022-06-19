import { connect } from "react-redux";
import StepList from "./step_list.jsx";

import { stepsByTodoId } from "../../reducers/selectors.js";
import { receiveStep } from "../../actions/step_actions.js";
const mSTP = (state,{todo_id}) => ({
    steps: stepsByTodoId(state,todo_id),
    todo_id
});

const mDTP = dispatch => ({
    receiveStep: step => dispatch(receiveStep(step))
});



const StepListContainer = connect(mSTP, mDTP)(StepList);
export default StepListContainer;