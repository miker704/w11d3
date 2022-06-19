import { connect } from "react-redux";
import StepListItem from "./step_list_item.jsx";
import { removeStep, receiveStep } from "../../actions/step_actions.js";



const mDTP = (dispatch,{step}) => ({
removeStep : ()=> dispatch(removeStep(step)),
receiveStep: step => dispatch(receiveStep(step))
});



const StepListItemContainer = connect(null, mDTP)(StepListItem);
export default StepListItemContainer;