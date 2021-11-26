import React from "react";
import { Route, Routes } from "react-router-dom";

// Assets
import "../assets/App.css";

// Contexts
import { LocationStore } from "../contexts/LocationContext";

// Components
import Header from "../parts/Header";

// Pages
import Home from "../pages/Home";

const App = () => {
	return (
		<div className="bg-blue-100 h-screen">
			<LocationStore>
				<Header />
				<div className="container xl:px-8 md:px-6 sm:px-3 px-2 mt-4">
					<Routes>
						<Route path="/" exact element={<Home />} />
					</Routes>
				</div>
			</LocationStore>
		</div>
	);
};

export default App;
