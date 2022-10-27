import { useState, useEffect } from "react";
import axios from "axios";

function AppStatus() {
	const [status, setStatus] = useState();

	useEffect(() => {
		async function fetchData() {
			const response = await axios.get("http://localhost:4000");
			setStatus(response.data);
		}
		fetchData();
	}, []);

	return <div>{JSON.stringify(status)}</div>;
}

export default AppStatus;
