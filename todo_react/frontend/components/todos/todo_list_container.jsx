import {connect} from 'react-redux';
import TodoList from "./todo_list.jsx";



//import functions of todo and step from their action file

import {receiveTodo, receiveTodos} from "../../actions/todo_actions.js";
import {allTodos} from "../../reducers/selectors.js";

	const mapStateToProps = state => ({

		todos: allTodos(state),
		state
	});
	

	const mapDispatchToProps = dispatch =>({

		receiveTodos: () => dispatch(receiveTodos()),
		receiveTodo : todo => dispatch(receiveTodo(todo))

	});


	export default connect(
		mapStateToProps,
		mapDispatchToProps

	)(TodoList);

