import React, { useContext, useEffect, useState } from "react";

import LocationContext from "../contexts/LocationContext";
import openWeather from "../apis/openWeather";

const Home = () => {
	const context = useContext(LocationContext);
	const [timezone, setTimezone] = useState("");
	const [temperature, setTemperature] = useState(null);

	useEffect(() => {
		openWeather
			.get("onecall", {
				params: {
					lat: context.location.coords.latitude,
					lon: context.location.coords.longitude,
				},
			})
			.then((response) => {
				setTimezone(response.data.timezone);
				setTemperature(response.data.current.temp);
				console.log(response.data);
			});
	}, []);

	console.log("Timezone: ", timezone);
	return (
		<div className="flex justify-start">
			<div className="bg-gray-100 border-2 border-blue-400 inline-block px-3 py-2 rounded-md shadow-sm">
				<span className="font-serif">
					{timezone && temperature
						? `${timezone}: ${temperature}°C`
						: "Loading..."}
				</span>
			</div>
		</div>
	);
};

export default Home;
