import React from "react";

import WeatherIcon from "../components/WeatherIcon";
import Loader from "../components/Loader";

const WeatherStatus = ({ weatherIcon, temperature, location }) => {
	return (
		<div className="bg-gray-900 bg-opacity-20 border-2 ring-2 opa px-3 py-2 rounded-md shadow-sm flex justify-between items-center pr-6">
			<span>
				{weatherIcon ? (
					<WeatherIcon icon={weatherIcon} />
				) : (
					<Loader size="16" />
				)}
			</span>
			<span className="ml-2 font-serif text-gray-50 text-xl">
				{location && temperature
					? ` ${location}: ${temperature}°C`
					: "Loading..."}
			</span>
		</div>
	);
};

export default WeatherStatus;
