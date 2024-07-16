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
		],

		editTodo: {}
	}

	addNewTodo = (todo) => {
		this.setState({
			listTodos: [...this.state.listTodos, todo]
		})
		toast.success('add success')

	}

	handleDeleteTodo = (todo) => {
		let currentTodos = this.state.listTodos
		currentTodos = currentTodos.filter(item => item.id !== todo.id)
		this.setState({
			listTodos: currentTodos
		})
		toast.success('delete success')
	}

	handleEditTodo = (todo) => {
		let { editTodo, listTodos } = this.state
		let isEmptyObj = Object.keys(editTodo).length === 0
		//save
		if (isEmptyObj === false && editTodo.id === todo.id) {
			let listTodosCopy = [...listTodos]
			let objIndex = listTodosCopy.findIndex((item => item.id === todo.id))
			listTodosCopy[objIndex].title = editTodo.title
			this.setState({
				listTodos: listTodosCopy,
				editTodo: {}
			})
			toast.success('update success')
			return
		}
		this.setState({
			editTodo: todo
		})
	}

	handleOnChangeEditTodo = (event) => {
		let editTodoCopy = { ...this.state.editTodo }
		editTodoCopy.title = event.target.value
		this.setState({
			editTodo: editTodoCopy
		})
	}

	render() {
		let { listTodos, editTodo } = this.state
		let isEmptyObj = Object.keys(editTodo).length === 0
		console.log(editTodo, isEmptyObj)
		return (
			<>
				<p>SIMPLE TODO APP WITH REACT!</p>
				<div className="list-todo-container">
					<AddTodo
						addNewTodo={this.addNewTodo}
					/>
					<div className="list-todo-content">
						{listTodos && listTodos.length > 0 &&
							listTodos.map((item, index) => {
								return (
									<div className="list-todo-child" key={item.id}>
										{isEmptyObj === true ?
											<span>{index + 1} - {item.title}</span>
											:
											<>
												{editTodo.id === item.id ?
													<span>
														{index + 1} -
														<input value={editTodo.title}
															onChange={(event) => this.handleOnChangeEditTodo(event)}
														/></span>
													:
													<span>{index + 1} - {item.title}</span>
												}
											</>
										}
										<button className="edit"
											onClick={() => this.handleEditTodo(item)}
										>{isEmptyObj === false && editTodo.id === item.id ?
											'Save' : 'Edit'
											}</button>
										<button className="delete"
											onClick={() => this.handleDeleteTodo(item)}
										>delete</button>
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