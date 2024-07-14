import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponents";

class MyComponent extends React.Component {

	state = {
		arrJobs: [
			{ id: 'abcjob1', title: 'Dev', salary: '500' },
			{ id: 'abcjob2', title: 'Tester', salary: '600' },
			{ id: 'abcjob3', title: 'PM', salary: '1000' }
		]
	}

	addNewJob = (job) => {
		console.log('check job from parent')
		this.setState({
			arrJobs: this.state.arrJobs.concat(job)
		})
	}

	deleteJob = (job) => {
		let currentJobs = this.state.arrJobs
		currentJobs = currentJobs.filter(item => item.id !== job.id)
		this.setState({
			arrJobs: currentJobs
		})
	}

	componentDidUpdate(prevProps, prevState) {
		console.log('>>>run componentDidUpdate', 'prevState', prevState, 'current state', this.state)
	}

	componentDidMount() {
		console.log('>>>run componentDidMount')
	}

	render() {
		console.log('>>>run render')
		let name = 'Hai';
		return (
			<>
				<AddComponent
					addNewJob={this.addNewJob}
				/>
				<ChildComponent
					arrJobs={this.state.arrJobs}
					deleteJob={this.deleteJob}
				/>
			</>
		)
	}

}

export default MyComponent;