import { useEffect, useState } from "react";
import axios from "axios";
import "./greetUser.css";

const GreetUser = () => {

  const [time, setTime] = useState();

  const [notes, setNotes] = useState([]);

  const getNotes = async () => {
    try {
      const res = await axios.get(
        `http://localhost:3001`
      );
      setNotes(res.data.slice(0, 3).reverse());

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getNotes();
  }, []);

  useEffect(() => {
    setInterval(() => {
      const dateObject = new Date();

      const hour = String(dateObject.getHours()).padStart(2, '0');
      const minutes = String(dateObject.getMinutes()).padStart(2, '0');

      const currentTime = hour + ":" + minutes;

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
      <div className="notes-greet-user">
        <div className="greet-user-text">
          <a>Your notes are</a>
          <section />
          <ul>
            {notes.map((item, index) => (
              <li key={item.id || index}>
               {typeof item === "object" ? item.notes : item}
              </li>
            )) }
          </ul>
        </div>
      </div>
    </div>
  );
};

export default GreetUser;
