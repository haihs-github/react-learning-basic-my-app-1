import React from "react";
import ChildComponent from "./ChildComponent";

class MyComponent extends React.Component {

	state = {
		firstName: "",
		lastName: "",
		arrJobs: [
			{ id: 'abcjob1', title: 'Dev', salary: '500$' },
			{ id: 'abcjob2', title: 'Tester', salary: '600$' },
			{ id: 'abcjob3', title: 'PM', salary: '1000$' }
		]
	}

	handleChangeFirstName = (event) => {
		this.setState(
			{
				firstName: event.target.value,
			}
		)
	}

	handleChangeLastName = (event) => {
		this.setState(
			{
				lastName: event.target.value,
			}
		)
	}

	handleClickSubmit = (event) => {
		event.preventDefault()
		console.log('check data >> ', this.state.firstName, '>> ', this.state.lastName)
	}

	render() {
		let name = 'Hai';
		return (
			<>
				<form>
					<label htmlFor='fname'>First name</label><br />
					<input
						type="text" id="fname" name="fname" value={this.state.firstName}
						onChange={(event) => this.handleChangeFirstName(event)}
					/><br />
					<label htmlFor='lname'>Last name</label><br />
					<input
						type="text" id="lname" name="lname" value={this.state.lastName}
						onChange={(event) => this.handleChangeLastName(event)}
					/><br />
					<input
						type="submit" value="submit"
						onClick={(event) => this.handleClickSubmit(event)}
					/>
				</form>

				<ChildComponent
					name={this.state.firstName}
					age={'20'}
					arrJobs={this.state.arrJobs}
				/>
			</>
		)
	}

}

export default MyComponent;