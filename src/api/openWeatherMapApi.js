import axios from "axios";

const API_URL = "https://api.openweathermap.org/data/2.5/weather/";
const API_KEY = "5d08576bf748affb068993b10407670e";

export const getCurrentWeather = async function (lat, lon) {
    let response = await axios.get(
        API_URL,
        {
            params: {
                lat: lat,
                lon: lon,
                appid: API_KEY,
                units: "metric"
            }
        })
    return response;
}