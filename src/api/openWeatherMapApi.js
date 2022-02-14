import axios from "axios";

const API_URL = "https://api.openweathermap.org/data/2.5";
const API_KEY = "5d08576bf748affb068993b10407670e";

export const getCurrentWeather = async function (lat, lon) {
    let response = await axios.get(
        `${API_URL}/weather`,
        {
            params: {
                lat: lat,
                lon: lon,
                appid: API_KEY,
                units: "metric"
            }
        })
    if (response.status !== 200) {
        throw new Error("Unable to get weather");
    }
    return response.data;
}

export const getForecast5Days = async function (lat, lon) {
    let response = await axios.get(
        `${API_URL}/onecall`,
        {
            params: {
                lat: lat,
                lon: lon,
                appid: API_KEY,
                units: "metric"
            }
        }
    )
    if (response.status !== 200) {
        throw new Error("Unable to get forecast")
    }
    return response.data.daily;
}
