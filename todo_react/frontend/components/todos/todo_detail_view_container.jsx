import { connect } from "react-redux";
import TodoDetailView from "./todo_detail_view";
import { removeTodo } from "../../actions/todo_actions";
import { receiveSteps } from "../../actions/step_actions"


const mDTP = (dispatch,{todo}) => ({
    receiveSteps: () => dispatch(receiveSteps(todo.id)),
    removeTodo: () => dispatch(removeTodo(todo))
})



const TodoDetailViewContainer = connect(null, mDTP)(TodoDetailView);
export default TodoDetailViewContainer;