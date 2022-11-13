import { useState } from "react";
import { Button } from "antd";
import userService from "../services/users";

function User({ data, userList, setUserList }) {
	const { userName, _id } = data;
	const [userNameModified, setUserNameModified] = useState(data.userName);

	const loguearInfoCompleta = async () => {
		const { data: userInfo } = await userService.getUserById(_id);
		console.log("userInfo: ", userInfo);
	};

	const modificarUsuario = async () => {
		const { data } = await userService.updateUserById(_id, {
			userName: userNameModified,
		});
		console.log("Response: ", data);
	};

	const eliminarUsuario = async () => {
		try {
			const { data } = await userService.deleteUserById(_id);
			setUserList(userList.filter((x) => x._id !== _id));
			console.log("Response: ", data);
		} catch (err) {
			console.log("Therre was an error deleting user ", _id);
			console.log(err);
		}
	};

	return (
		<div>
			<p>{userName}</p>
			<input
				value={userNameModified}
				onChange={(e) => setUserNameModified(e.target.value)}
			/>
			{/* <button onClick={() => loguearInfoCompleta()}>Ver Detalle</button> */}
			<Button type="primary" onClick={() => loguearInfoCompleta()}>
				Ver Detalle
			</Button>
			<button onClick={() => modificarUsuario()}>Modificar</button>
			{/* <button onClick={() => eliminarUsuario()}>Borrar</button> */}
			<Button danger disabled={true} onClick={() => eliminarUsuario()}>
				Borrar
			</Button>
		</div>
	);
}

export default User;
