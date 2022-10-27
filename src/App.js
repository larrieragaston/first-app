import "./App.css";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import UserList from "./UserList";
import AppStatus from "./AppStatus";

function App() {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <AppStatus />,
		},
		{
			path: "/users",
			element: <UserList />,
		},
	]);

	return <RouterProvider router={router} />;
}

export default App;
