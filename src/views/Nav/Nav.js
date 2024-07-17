import React from "react";
import './Nav.scss'
import { Link, NavLink } from "react-router-dom"

class Nav extends React.Component {
	render() {
		return (
			<>
				<div className="topnav">
					<NavLink to="/Home" activeClassName="active">Home</NavLink>
					<NavLink to="/Todo" activeClassName="active">Todo</NavLink>
					<NavLink to="/About" activeClassName="active">About</NavLink>
					<NavLink to="/User" activeClassName="active">user</NavLink>
				</div>
			</>
		)
	}
}

export default Nav;