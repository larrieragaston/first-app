import axios from "axios";
import { apiBaseUrl, apiTimeout } from "../constants";
import { Navigate } from "react-router-dom";
import localStorage from "./localStorage";

function errorMessage(err) {
	if (err.response && err.response.status === 401) {
		localStorage.delete();
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

api.interceptors.request.use(
	(config) => {
		// Do something before request is sent
		const data = localStorage.get();
		if (data) {
			// eslint-disable-next-line no-param-reassign
			config.headers.common.Authorization = `${data.token}`;
		}
		return config;
	},
	(error) =>
		// Do something with request error
		Promise.reject(error)
);

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
