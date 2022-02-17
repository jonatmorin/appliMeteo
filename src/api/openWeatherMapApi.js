import axios from "axios";

const API_URL = "https://api.openweathermap.org/data/2.5";
const API_KEY = process.env.VUE_APP_WEATHER_API_KEY;

export const getCurrentWeather = async function (lat, lon, units) {
    let response = await axios.get(
        `${API_URL}/weather`,
        {
            params: {
                lat: lat,
                lon: lon,
                appid: API_KEY,
                units: units
            }
        })
    if (response.status !== 200) {
        throw new Error("Unable to get current weather");
    }
    return response.data;
}

export const getForecast5Days = async function (lat, lon, units) {
    let response = await axios.get(
        `${API_URL}/onecall`,
        {
            params: {
                lat: lat,
                lon: lon,
                appid: API_KEY,
                units: units
            }
        }
    )
    if (response.status !== 200) {
        throw new Error("Unable to get forecast")
    }
    return response.data.daily;
}
