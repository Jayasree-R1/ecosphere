// src/weatherService.js
import axios from "axios";

const API_KEY = "ae987c3eb48a4ce5beb105111242710"; // Replace with your actual API key
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

export const getWeatherData = async (location) => {
  try {
    const response = await axios.get(
      `${BASE_URL}?q=${location}&appid=${API_KEY}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    throw error;
  }
};
