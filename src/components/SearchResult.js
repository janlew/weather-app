import React from "react";
import WeatherIcon from "../components/WeatherIcon";

const SearchResult = ({ result }) => {
	if (!result) {
		return (
			<div className="flex justify-center">
				<h2>Type something in search...</h2>
			</div>
		);
	}

	console.log(result);

	return (
		<div className="flex justify-center items-center">
			<WeatherIcon icon={result.weather[0].icon} />
			<h1 className="font-mono text-3xl">
				{result.name}, {result.sys.country}
			</h1>
		</div>
	);
};

export default SearchResult;
