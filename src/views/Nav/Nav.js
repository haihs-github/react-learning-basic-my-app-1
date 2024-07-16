import React from "react";
import './Nav.scss'
import { Link } from "react-router-dom"

class Nav extends React.Component {
	render() {
		return (
			<>
				<div className="topnav">
					<Link to="/" class="active">Home</Link>
					<Link to="/Todo">Todo</Link>
					<Link to="/About">About</Link>
				</div>
			</>
		)
	}
}

export default Nav;