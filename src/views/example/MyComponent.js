import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponents";

class MyComponent extends React.Component {

	state = {
		arrJobs: [
			{ id: 'abcjob1', title: 'Dev', salary: '500$' },
			{ id: 'abcjob2', title: 'Tester', salary: '600$' },
			{ id: 'abcjob3', title: 'PM', salary: '1000$' }
		]
	}



	render() {
		let name = 'Hai';
		return (
			<>
				<AddComponent />
				<ChildComponent
					arrJobs={this.state.arrJobs}
				/>
			</>
		)
	}

}

export default MyComponent;