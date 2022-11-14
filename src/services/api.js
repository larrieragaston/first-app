import axios from "axios";
import { apiBaseUrl, apiTimeout } from "../constants";
import { Navigate } from "react-router-dom";

function errorMessage(err) {
	if (err.response && err.response.status === 401) {
		<Navigate to="/" replace={true} />;
	}
	// if (err.response && err.response.status === 403) {
	// 	<Navigate to="/403" replace={true} />;
	// }
	// if (err.response && err.response.status === 404) {
	// 	<Navigate to="/404" replace={true} />;
	// }
	// if (err.response && err.response.status === 500) {
	// 	<Navigate to="/500" replace={true} />;
	// }
	return err;
}

const api = axios.create({
	baseURL: apiBaseUrl,
	timeout: apiTimeout,
	headers: {
		Accept: "application/json",
		"Content-Type": "application/json",
	},
});

// Add a response interceptor
api.interceptors.response.use(
	(response) =>
		// Do something with response data
		response.data,
	(error) =>
		// Do something with response error
		Promise.reject(errorMessage(error))
);

export default api;
