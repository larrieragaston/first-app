import { useState } from "react";
import axios from "axios";

function User({ userName, _id }) {
	const [userNameModified, setUserNameModified] = useState(userName);

	const loguearInfoCompleta = async () => {
		const { data: userInfo } = await axios.get(
			"http://localhost:4000/users/" + _id
		);
		console.log("userInfo: ", userInfo);
	};

	const modificarUsuario = async () => {
		const { data } = await axios.put("http://localhost:4000/users/" + _id, {
			userName: userNameModified,
		});
		console.log("Response: ", data);
	};

	const eliminarUsuario = async () => {
		const { data } = await axios.delete("http://localhost:4000/users/" + _id);
		console.log("Response: ", data);
	};

	return (
		<div>
			<p>{userName}</p>
			<input
				value={userNameModified}
				onChange={(e) => setUserNameModified(e.target.value)}
			/>
			<button onClick={() => loguearInfoCompleta()}>Ver Detalle</button>
			<button onClick={() => modificarUsuario()}>Modificar</button>
			<button onClick={() => eliminarUsuario()}>Borrar</button>
		</div>
	);
}

export default User;
