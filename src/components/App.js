import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Assets
import "../assets/App.css";

// API
import openWeather from "../apis/openWeather";

// Utils
import history from "../history";

// Components
import Header from "../parts/Header";

// Pages
import Home from "../pages/Home";

const App = () => {
	openWeather
		.get("/forecast", {
			params: {
				id: "524901",
			},
		})
		.then((response) => {
			console.log(response);
		});

	return (
		<div className="bg-gray-300 h-screen">
			<Router history={history}>
				<Header />
				<Routes>
					<Route path="/" component={Home} />
				</Routes>
			</Router>
		</div>
	);
};

export default App;
