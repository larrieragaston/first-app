import { useState, useEffect } from "react";
import User from "../components/User";
import { Button, Form, Input, Modal, message } from "antd";
import { LanguageContext } from "../context/LanguageContext";
import { useContext } from "react";
import userService from "../services/users";

const CreateUser = ({ open, onCreate, onCancel }) => {
	const [form] = Form.useForm();

	return (
		<Modal
			open={open}
			title="Create a new user"
			okText="Create"
			cancelText="Cancel"
			onCancel={onCancel}
			onOk={() => {
				form
					.validateFields()
					.then((values) => {
						onCreate(values);
						form.resetFields();
					})
					.catch((info) => {
						console.log("Validate Failed:", info);
					});
			}}
		>
			<Form
				form={form}
				layout="vertical"
				name="form_in_modal"
				initialValues={{
					modifier: "public",
				}}
			>
				<Form.Item
					name="email"
					label="Email"
					rules={[
						{ type: "email" },
						{
							required: true,
							message: "Please input the email!",
						},
					]}
				>
					<Input />
				</Form.Item>
			</Form>
		</Modal>
	);
};

function UserList() {
	const [users, setUsers] = useState([]);

	const { language } = useContext(LanguageContext);

	const [open, setOpen] = useState(false);
	const error = (errorMessage) => {
		message.error("Error: ", errorMessage);
	};

	const onCreate = async (values) => {
		try {
			console.log("Received values of form: ", values);
			const newUser = await userService.createUser({
				userName: values.email,
				role: "admin",
				isActive: true,
			});
			setUsers([...users, newUser]);
			console.log("Response: ", newUser);
			setOpen(false);
		} catch (err) {
			error(err);
		}
	};

	useEffect(() => {
		async function fetchData() {
			const response = await userService.getUsers();
			setUsers(response);
		}
		fetchData();
	}, []);

	return (
		<div>
			<p>{language}</p>
			<Button
				type="primary"
				onClick={() => {
					setOpen(true);
				}}
			>
				Crear Usuario
			</Button>
			<CreateUser
				open={open}
				onCreate={onCreate}
				onCancel={() => {
					setOpen(false);
				}}
			/>
			{users.map((x) => (
				<User
					key={x._id}
					data={x}
					userList={users}
					setUserList={setUsers}
				></User>
			))}
		</div>
	);
}

export default UserList;
