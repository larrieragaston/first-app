import axios from "axios";
import { apiBaseUrl, apiTimeout } from "../constants";

const api = axios.create({
	baseURL: apiBaseUrl,
	timeout: apiTimeout,
	headers: {
		Accept: "application/json",
		"Content-Type": "application/json",
	},
});

export default api;
