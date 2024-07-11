import React from "react";

class ChildComponent extends React.Component {
	state = {
		showJobs: false
	}

	handleShowHide = () => {
		this.setState({
			showJobs: !this.state.showJobs
		})
	}

	render() {
		let { arrJobs } = this.props
		let { showJobs } = this.state
		let check = showJobs === true ? 'showJobs = true' : 'showJobs = false'
		// return ( //c1
		// 	<>
		// 		{showJobs === false &&
		// 			<div>
		// 				<button onClick={() => this.handleShowHide()}>Show</button>
		// 			</div>
		// 		}
		// 		{showJobs &&
		// 			<>
		// 				<div className="Job-list">
		// 					{
		// 						arrJobs.map((item) => {
		// 							return (
		// 								<div key={item.id}>
		// 									{item.title} - {item.salary}
		// 								</div>
		// 							)
		// 						})
		// 					}
		// 				</div>
		// 				<div>
		// 					<button onClick={() => this.handleShowHide()}>Hide</button>
		// 				</div>
		// 			</>
		// 		}
		// 	</>
		// )

		return ( //c2
			<>
				{showJobs === false ?
					<div>
						<button onClick={() => this.handleShowHide()}>Show</button>
					</div>
					:
					<>
						<div className="Job-list">
							{
								arrJobs.map((item) => {
									return (
										<div key={item.id}>
											{item.title} - {item.salary}
										</div>
									)
								})
							}
						</div>
						<div>
							<button onClick={() => this.handleShowHide()}>Hide</button>
						</div>
					</>
				}
			</>
		)
	}
}

// const ChildComponent = (props) => {
// 	let { arrJobs } = props
// 	return (
// 		<>
// 			<div>
// 				{/* ChildComponent: {name} - {age} */}
// 				{
// 					arrJobs.map((item, index) => {
// 						return (
// 							<div key={item.id}>
// 								{item.title} - {item.salary}
// 							</div>
// 						)
// 					})
// 				}
// 			</div>
// 		</>
// 	)
// }

export default ChildComponent;