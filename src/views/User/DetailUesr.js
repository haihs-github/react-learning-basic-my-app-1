import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios"
import { Link, NavLink } from "react-router-dom"


const withParams = (Component) => (props) => {
	const params = useParams();
	return <Component {...props} params={params} />;
};

class DetailUser extends React.Component {
	state = {
		user: {}
	}
	componentDidMount() {
		let id = this.props.params.id
		axios.get(`https://reqres.in/api/users/${id}`) //lấy ra api
			.then(res => { // lấy ra res (api)
				this.setState({
					user: res && res.data && res.data.data ? res.data.data : [] // cập nhật mảng user bằng với res.data.data
				}
				)
			})
	}

	render() {
		let { user } = this.state
		let isEmptyObj = Object.keys(user).length === 0;
		return (
			<>
				<div>Hello DetailUser id = {this.props.params.id}</div>
				{isEmptyObj === false &&
					<>
						<div>User's name: {user.first_name} {user.last_name}</div>
						<div>User's email: {user.email}</div>
						<div>
							<img src="user.avatar"></img>
						</div>
						<Link to="/User" style={{ textDecoration: 'none', color: "white" }}>Back</Link>
					</>
				}
			</>
		);
	}
}

export default withParams(DetailUser);
