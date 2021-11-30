import React from "react";

const WeatherIcon = ({ icon }) => {
	return (
		<img
			className="h-16"
			src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
			alt=""
		/>
	);
};

export default WeatherIcon;
