import { useEffect, lazy, Suspense } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";

import { onAuthStateChangedListener } from "./utils/firebase/firebase.utils";

import { setCurrentUser } from "./store/user/user.action";

import Spinner from "./components/spinner/spinner.component";

const NavigationBar = lazy(() => import("./routes/navigation/navigation.component"));
const Home = lazy(() => import("./routes/home/home.component"));
const Authentication = lazy(() => import("./routes/authentication/authentication.component"));
const Shop = lazy(() => import("./routes/shop/shop.component"));
const CheckOut = lazy(() => import("./routes/checkout/check-out.component"));

const App = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		const unsubscribe = onAuthStateChangedListener((user) => {
			dispatch(setCurrentUser(user));
		});

		return unsubscribe;
	}, []);

	return (
		<Suspense fallback={<Spinner />}>
			<Routes>
				<Route path="/" element={<NavigationBar />}>
					<Route index element={<Home />} />
					<Route path="shop/*" element={<Shop />} />
					<Route path="/auth" element={<Authentication />} />
					<Route path="/check-out" element={<CheckOut />} />
				</Route>
			</Routes>
		</Suspense>
	);
};

export default App;
