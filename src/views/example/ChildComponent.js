import React from "react";

// class ChildComponent extends React.Component {

// 	state = {
// 		firstName: "",
// 		lastName: "",
// 	}

// 	handleChangeFirstName = (event) => {
// 		this.setState(
// 			{
// 				firstName: event.target.value,
// 			}
// 		)
// 	}

// 	handleChangeLastName = (event) => {
// 		this.setState(
// 			{
// 				lastName: event.target.value,
// 			}
// 		)
// 	}

// 	handleClickSubmit = (event) => {
// 		event.preventDefault()
// 		console.log('check data >> ', this.state.firstName, '>> ', this.state.lastName)
// 	}

// 	render() {
// 		console.log(this.props)
// 		let { name, age, arrJobs } = this.props
// 		return (
// 			<>
// 				<div>
// 					ChildComponent: {name} - {age}
// 					{
// 						arrJobs.map((item, index) => {
// 							return (
// 								<div key={item.id}>
// 									{item.title} - {item.salary}
// 								</div>
// 							)
// 						})
// 					}
// 				</div>
// 			</>
// 		)
// 	}

// }

const ChildComponent = (props) => {
	let { arrJobs } = props
	return (
		<>
			<div>
				{/* ChildComponent: {name} - {age} */}
				{
					arrJobs.map((item, index) => {
						return (
							<div key={item.id}>
								{item.title} - {item.salary}
							</div>
						)
					})
				}
			</div>
		</>
	)
}

export default ChildComponent;