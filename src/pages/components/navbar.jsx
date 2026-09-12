import { useState } from "react";
import GrassWingLogo from "./icons/grasswinglogo.png";
import "./navbar.css";

const GrasswingNavbar = () => {

  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState('');

  return (
    <div className="navbar-container">
      <img className="logo" src={GrassWingLogo} alt="Grasswing-Icon" />
      <div className="site-selector">
        <button className="bar-button" onClick={() => window.location.href = "/"}>
          <a>Main</a>
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
      <div>
        <a>Weather in 1.1.5b</a>
      </div>
    </div>

  );
};

export default GrasswingNavbar;
