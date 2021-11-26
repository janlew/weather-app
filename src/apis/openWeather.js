import axios from "axios";

const API_KEY = "cfd36134761be10358a2ebc58900d5e8";
const WEATHER_URL = `http://api.openweathermap.org/data/2.5/`;

export default axios.create({
	baseURL: WEATHER_URL,
	params: {
		appid: API_KEY,
	},
});
