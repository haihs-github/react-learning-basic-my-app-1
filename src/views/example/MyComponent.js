import React from "react";

class MyComponents extends React.Component {

	state = {
		name: 'Hai',
		class: 'D22CQCN261',
	}

	handleOnChangeName = (event) => {
		this.setState({
			name: event.target.value,
			class: event.target.value
		})
	}

	handleClickButton = () => {
		console.log('click the button')
		alert('click me')
	}

	render() {
		let name = 'Hai';
		return (
			<>
				<div className="first">
					<input value={this.state.name} type="text"
						onChange={(event) => this.handleOnChangeName(event)}
					/>
					My name is {this.state.name}
				</div>
				<div className="second">
					im from class {this.state.class}
				</div>
				<div className="third">
					<button onClick={() => this.handleClickButton()}>click me</button>
				</div>
			</>
		)
	}

}

export default MyComponents;