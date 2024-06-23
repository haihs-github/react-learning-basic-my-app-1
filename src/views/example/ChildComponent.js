import React from "react";

class ChildComponent extends React.Component {

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
				<div>
					ChildComponent: {this.props.name}
				</div>
			</>
		)
	}

}

export default ChildComponent;