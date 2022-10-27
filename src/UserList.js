import { useState, useEffect } from "react";
import axios from "axios";
import User from "./User";

function UserList() {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		async function fetchData() {
			const response = await axios.get("http://localhost:4000/users");
			setUsers(response.data);
		}
		fetchData();
	}, []);

	return (
		<div>
			{users.map((x) => (
				<User userName={x.userName} _id={x._id}></User>
			))}
		</div>
	);
}

export default UserList;
