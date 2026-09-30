import { useState, useEffect } from "react";
import GrassWingLogo from "./icons/grasswinglogo.png";
import axios from "axios";
import "./navbar.css";

const GrasswingNavbar = () => {

  const [weatherData, setWeatherData] = useState(null);

  const fetchWeather = async () => {
    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=-23.50&lon=-47.46&appid=${import.meta.env.VITE_WEATHER}&units=metric`
      );

      setWeatherData(res.data.main);

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchWeather();
  }, []);

  return (
    <div className="navbar-container">
      <img className="logo" src={GrassWingLogo} alt="Grasswing-Icon" />
      <div className="site-selector">
        <button className="bar-button" onClick={() => window.location.href = "/"}>
          <a>Start</a>
        </button>
        <button className="bar-button" onClick={() => window.location.href = "/news"}>
          <a>News</a>
        </button>
        <button className="bar-button" onClick={() => window.location.href = "/notes"}>
          <a>Notes</a>
        </button>
        <button className="bar-button" onClick={() => window.location.href ="/music"}>
          <a>Music</a>
        </button>
      </div>
      <div className="weather-viewer">
        {
          weatherData ? (
            <a>{Math.round(weatherData.temp)} °C</a>
          ) : (
            <a>Loading...</a>
          )
        }

      </div>
    </div>

  );
};

export default GrasswingNavbar;
