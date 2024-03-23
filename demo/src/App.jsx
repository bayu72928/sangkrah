import BottomNav from "./components/BottomNav";
import Home from "./screens/Home";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Transaksi from "./screens/Transaksi";
import Profile from "./screens/Profile";
import Inbox from "./screens/Inbox";
import Pickup from "./screens/Pickup";

const App = () => {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <LayoutNav />,
			children: [
				{
					index: true,
					element: <Home />,
				},
				{
					path: "transaksi",
					element: <Transaksi />,
				},
				{
					path: "pickup",
					element: <Pickup />,
				},
				{
					path: "inbox",
					element: <Inbox />,
				},
				{
					path: "profile",
					element: <Profile />,
				},
			],
		},
	]);

	return <RouterProvider router={router} />;
};

const LayoutNav = () => (
	<>
		<div className="max-w-xl mx-auto">
			<Outlet />
		</div>
		<BottomNav />
	</>
);

export default App;
