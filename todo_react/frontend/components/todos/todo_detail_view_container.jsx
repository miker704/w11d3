import { connect } from "react-redux";
import TodoDetailView from "./todo_detail_view";
import { removeTodo } from "../../actions/todo_actions";
import { receiveSteps } from "../../actions/step_actions"


const mDTP = (dispatch,{todo}) => ({
    removeTodo: () => dispatch(removeTodo(todo)),
    receiveSteps: () => dispatch(receiveSteps(todo.id))
})



const TodoDetailViewContainer = connect(null, mDTP)(TodoDetailView);
export default TodoDetailViewContainer;