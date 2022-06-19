import { connect } from "react-redux";
import TodoDetailView from "./todo_detail_view";
import { removeTodo } from "../../actions/todo_actions";
import { receiveSteps } from "../../actions/step_actions"

const mSTP = state => ({

})
const mDTP = dispatch => ({
    removeTodo: () => dispatch(removeTodo(todo))
})



const TodoDetailViewContainer = connect(null, mDTP)(TodoDetailView);
export default TodoDetailViewContainer;