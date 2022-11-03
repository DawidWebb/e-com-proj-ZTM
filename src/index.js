import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";

import App from "./App";
import { UserPrtovider } from "./contexts/user.context";
import { ProductsProvider } from "./contexts/product.context";
import { CartProvider } from "./contexts/cart.context";

import "./index.scss";

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<UserPrtovider>
				<ProductsProvider>
					<CartProvider>
						<App />
					</CartProvider>
				</ProductsProvider>
			</UserPrtovider>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById("root"),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();