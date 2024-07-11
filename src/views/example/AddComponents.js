import React from 'react';

class AddComponent extends React.Component {
	state = {
		title: "",
		salary: ""
	}

	handleChangeTitleName = (event) => {
		this.setState(
			{
				title: event.target.value,
			}
		)
	}

	handleChangeSalary = (event) => {
		this.setState(
			{
				salary: event.target.value,
			}
		)
	}

	handleClickSubmit = (event) => {
		event.preventDefault()
		console.log('check data >> ', this.state.title, '>> ', this.state.salary)
		if (!this.state.title || !this.state.salary) {
			return
		}
		this.props.addNewJob({
			id: Math.floor(Math.random() * 900) + 100,
			title: this.state.title,
			salary: this.state.salary
		})
		this.state.title = ""
		this.state.salary = ""
	}

	render() {
		return (
			<>
				<form>
					<label htmlFor='fname'>Job Title</label><br />
					<input
						type="text" id="fname" name="fname" value={this.state.title}
						onChange={(event) => this.handleChangeTitleName(event)}
					/><br />
					<label htmlFor='lname'>Salary</label><br />
					<input
						type="text" id="lname" name="lname" value={this.state.salary}
						onChange={(event) => this.handleChangeSalary(event)}
					/><br />
					<input
						type="submit" value="submit"
						onClick={(event) => this.handleClickSubmit(event)}
					/>
				</form>
			</>
		)
	}
}

export default AddComponent;