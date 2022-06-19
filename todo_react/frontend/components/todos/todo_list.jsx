import React from "react";
import TodoListItem from "./todo_list_item";
import TodoForm from "./todo_form";



	class TodoList extends React.Component{
		// componentDidMount(){
		// 	this.props.receiveTodo();
		// }

		render(){
				const{todos, receiveTodo, updateTodo,errors} = this.props;
				const allTodos = todos.map((todo)=>{
					return <TodoListItem
						key={`todo-list-item${todo.id}`}
						todo={todo}
						receiveTodo={receiveTodo}
					
					/>
				})
			return(
				<div>

				<ul className = "todo-list">
						{allTodos}

				</ul>

					<TodoForm receiveTodo={receiveTodo}/>

				</div>
			);

		}


	}



export default TodoList;
//
	// export default () => <h3>Todo List goes here!</h3>
