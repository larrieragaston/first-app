import "./styles/App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UserList from "./modules/UserList";
import AppStatus from "./AppStatus";

function Router() {
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

export default Router;
