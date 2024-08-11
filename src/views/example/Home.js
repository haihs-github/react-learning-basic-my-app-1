import React from "react";
import logo from "../../asset/images/logo.png"

class Home extends React.Component {
	render() {
		return (
			<>
				<div>Hello Home</div>
				<div>
					<img src={logo}></img>
				</div>
			</>
		)
	}
}

export default Home;