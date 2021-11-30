import React, { useContext, useEffect, useState } from "react";

import LocationContext from "../contexts/LocationContext";
import openWeather from "../services/apis/openWeather";
import Search from "../components/Search";
import WeatherStatus from "../components/WeatherStatus";
import Background from "../components/Background";
import SearchResult from "../components/SearchResult";

const Home = () => {
	const context = useContext(LocationContext);
	const [temperature, setTemperature] = useState(null);
	const [weatherIcon, setWeatherIcon] = useState(null);
	const [weatherType, setWeatherType] = useState(null);
	const [searchResult, setSearchResult] = useState(null);

	useEffect(() => {
		openWeather
			.get("weather", {
				params: {
					lat: context.location.coords.latitude,
					lon: context.location.coords.longitude,
				},
			})
			.then((response) => {
				setTemperature(response.data.main.temp);
				setWeatherIcon(response.data.weather[0].icon);
				setWeatherType(response.data.weather[0].main);
				context.onCityChange(response.data.name);
				console.log(response);
			});
	}, []);

	const onSearch = (searchValue) => {
		if (searchValue) {
			openWeather
				.get("weather", {
					params: {
						q: searchValue,
					},
				})
				.then((response) => {
					setSearchResult(response.data);
				});
		}
	};

	return (
		<>
			{/* <Background type={weatherType} /> */}
			<div className="flex justify-between items-start relative z-10">
				<Search onSearch={onSearch} />
				<WeatherStatus
					location={context.city}
					temperature={temperature}
					weatherIcon={weatherIcon}
				/>
			</div>
			<SearchResult result={searchResult} />
		</>
	);
};

export default Home;
