import axios from "axios";
require("dotenv").config();

const WEATHER_URL = `http://api.openweathermap.org/data/2.5/`;

export default axios.create({
	baseURL: WEATHER_URL,
	params: {
		appid: process.env.REACT_APP_WEATHER_API,
	},
});
