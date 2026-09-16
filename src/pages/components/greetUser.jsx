import { useEffect, useState } from "react";
import "./greetUser.css";

const GreetUser = () => {

  const [time, setTime] = useState();

  useEffect(() => {
    setInterval(() => {
      const dateObject = new Date();

      const hour = String(dateObject.getHours()).padStart(2, '0');
      const minutes = String(dateObject.getMinutes()).padStart(2, '0');
      const seconds = String(dateObject.getSeconds()).padStart(2, '0');

      const currentTime = hour + ":" + minutes + ":" + seconds;

      setTime(currentTime);
    }, 1000);
  }, []);

  return (
    <div className="greet-user-container">
      <div className="greet-user">
        <div className="greet-user-text">
          <a>Hello there</a>
          <section />
          <a>Your time is: {time}</a>
        </div>
      </div>
      <div className="greet-user-notes">
        <div className="notes-text">
          <a>Your notes are</a>
          <section />
          <a>[Insert notes]</a>
        </div>
      </div>
    </div>
  );
};

export default GreetUser;
