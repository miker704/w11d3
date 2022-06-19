import {connect} from 'react-redux';
import TodoList from "./todo_list.jsx";



//import functions of todo and step from their action file

import {receiveTodo, removeTodo} from "../../actions/todo_actions.js";
import {allTodos} from "../../reducers/selectors.js";

	const mapStateToProps = state => ({

		todos: allTodos(state),

	});
	

	const mapDispatchToProps = dispatch =>({

		receiveTodo : todo => dispatch(receiveTodo(todo)),


	});


	export default connect(
		mapStateToProps,
		mapDispatchToProps

	)(TodoList);

