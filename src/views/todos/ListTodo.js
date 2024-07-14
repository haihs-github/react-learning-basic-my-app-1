import React from 'react';
import "./ListTodo.scss";
import AddTodo from './AddTodo.js';
import { toast } from 'react-toastify';


class ListTodo extends React.Component {
	state = {
		listTodos: [
			{ id: 'todo1', title: 'Doing Homework' },
			{ id: 'todo2', title: 'Making videos' },
			{ id: 'todo3', title: 'fixbug' },

		]
	}

	addNewTodo = (todo) => {
		this.setState({
			listTodos: [...this.state.listTodos, todo]
		})
		toast.success('Wow so ez')

	}

	render() {
		let { listTodos } = this.state

		return (
			<>
				<div className="list-todo-container">
					<AddTodo
						addNewTodo={this.addNewTodo}
					/>
					<div className="list-todo-content">
						{listTodos && listTodos.length > 0 &&
							listTodos.map((item, index) => {
								return (
									<div className="list-todo-child" key={item.id}>
										<span>{index + 1} - {item.title}</span>
										<button className="edit">edit</button>
										<button className="delete">delete</button>
									</div>
								)
							})
						}
					</div>
				</div>
			</>
		)
	}
}

export default ListTodo