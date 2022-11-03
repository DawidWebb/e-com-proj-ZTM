import { Routes, Route } from "react-router-dom";
import NavigationBar from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";
import Authentication from "./routes/authentication/authentication.component";
import Shop from "./routes/shop/shop.component";
import CheckOut from "./routes/checkout/check-out.component";

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<NavigationBar />}>
				<Route index element={<Home />} />
				<Route path="shop" element={<Shop />} />
				<Route path="/auth" element={<Authentication />} />
				<Route path="/check-out" element={<CheckOut />} />
			</Route>
		</Routes>
	);
};

export default App;