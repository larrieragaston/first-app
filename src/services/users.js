import api from "./api";

const userService = {};

userService.getUsers = () => api.get(`/users/`);
userService.getUserById = (id) => api.get(`/users/${id}`);
userService.updateUserById = (id, payload) =>
	api.put(`/users/${id}`, { ...payload });
userService.deleteUserById = (id) => api.delete(`/users/${id}`);
userService.createUser = (payload) => api.post("/users/", { ...payload });

export default userService;
