import React, { createContext, useState, useEffect } from "react";

import Loader from "../components/Loader";

const LocationContext = createContext(null);

export const LocationStore = ({ children }) => {
	const [state, setState] = useState({ location: null });

	useEffect(() => {
		if (window.navigator.geolocation) {
			window.navigator.geolocation.getCurrentPosition(
				(position) => setState({ ...state, location: position }),
				(err) => alert(err.message)
			);
		}
	}, []);

	const onLocationChange = (location) => {
		setState({ ...state, location });
	};

	const onCityChange = (city) => {
		setState({ ...state, city });
	};

	if (!state.location) {
		return (
			<div className="bg-blue-100 h-screen flex justify-center items-center">
				<div className="flex flex-col justify-center items-center">
					<h4 className="text-gray-900 mb-5 font-mono">
						Allow location access to proceed
					</h4>
					<Loader size="32" />
				</div>
			</div>
		);
	}

	return (
		<LocationContext.Provider
			value={{ ...state, onLocationChange, onCityChange }}
		>
			{children}
		</LocationContext.Provider>
	);
};

export default LocationContext;
