import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Mixpanel from "mixpanel-browser";
import uuid from "react-uuid";
import { ToastProvider } from "react-toast-notifications";

Mixpanel.init("3592c2157b5a976cd9dd40ff6099d08b");

if (localStorage.getItem("__visitor")) {
	Mixpanel.identify(localStorage.getItem("__visitor"));
} else {
	const id = uuid();
	localStorage.setItem("__visitor", id);
	Mixpanel.identify(id);
}

ReactDOM.render(
	<React.StrictMode>
		<Router>
			<ToastProvider placement="top-left">
				<App />
			</ToastProvider>
		</Router>
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
