import React from "react";
import ChildComponent from "./ChildComponent";

class MyComponent extends React.Component {

	state = {
		firstName: "",
		lastName: "",
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

				<ChildComponent name={'child one'} />
				<ChildComponent name={'child two'} />
				<ChildComponent name={'child three'} />
			</>
		)
	}

}

export default MyComponent;