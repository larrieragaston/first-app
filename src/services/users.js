import api from "./api";

const userService = {};

userService.getUsers = () => api.get(`/users/`);
userService.getUserById = (id) => api.get(`/users/${id}`);
userService.updateUserById = (id, payload) =>
	api.put(`/users/${id}`, { ...payload });
userService.deleteUserById = (id) => api.delete(`/users/${id}`);
userService.createUser = (payload) => api.post("/users/", { ...payload });

userService.createGlarriera2Token = () =>
	api.post("/users/login", {
		email: "glarriera5@gmail.com",
		password: "Admin1234",
	});

export default userService;
