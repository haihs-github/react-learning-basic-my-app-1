import React from "react";
import axios from "axios";
import "./ListUser.scss";
import { useNavigate } from "react-router-dom";

// Create a functional wrapper component to use useNavigate
const withNavigate = (Component) => {
	return (props) => {
		const navigate = useNavigate();
		return <Component {...props} navigate={navigate} />;
	};
};

class ListUser extends React.Component {
	state = {
		ListUsers: []
	};

	handleViewDetailUser = (user) => {
		// Use the navigate function passed as a prop
		this.props.navigate(`/user/${user.id}`);
	};

	componentDidMount() {
		axios.get("https://reqres.in/api/users?page=1")
			.then(res => {
				this.setState({
					ListUsers: res && res.data && res.data.data ? res.data.data : []
				});
			});
	}

	render() {
		const { ListUsers } = this.state;
		return (
			<>
				<div className="list-user-container">
					Fetch all list users
				</div>
				<div className="list-user-content">
					{ListUsers && ListUsers.length > 0 &&
						ListUsers.map((item, index) => (
							<div
								className="list-user-child"
								key={item.id}
								onClick={() => this.handleViewDetailUser(item)}
							>
								{index + 1} - {item.first_name} {item.last_name}
							</div>
						))
					}
				</div>
			</>
		);
	}
}

export default withNavigate(ListUser);
