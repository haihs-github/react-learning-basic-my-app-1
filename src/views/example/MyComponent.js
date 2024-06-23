import React from "react";

class MyComponents extends React.Component {

	state = {
		name: 'Hai',
		class: 'D22CQCN261',
	}

	handleOnChangeName = (event) => {
		this.setState({
			name: event.target.value
		})
	}

	render() {
		let name = 'Hai';
		return (
			<>
				<div className="firstName">
					<input value={this.state.name} type="text"
						onChange={(event) => this.handleOnChangeName(event)}
					/>
					My name is {this.state['name']}
				</div>
				<div className="secondName">
					im from class {this.state.class}
				</div>
			</>
		)
	}

}

export default MyComponents;