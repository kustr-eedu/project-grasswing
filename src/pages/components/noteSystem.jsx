import { useState, useEffect } from "react";
import axios from "axios";
import "./noteSystem.css";

const NoteSystem = () => {

  const [notes, setNotes] = useState([]);
  const [text, setText] = useState("");

  const getNotes = async () => {
    try {
      const res = await axios.get(
        `http://localhost:3001`
      );
      setNotes(res.data);

    } catch (error) {
      console.log(error);
    }
  };

  const createNotes = async () => {
    try {
      await axios.post(`http://localhost:3001/create`, { notes: text });
      setText("");
      getNotes();;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getNotes();
  }, []);

  return (
    <div className="task-creator">
      <form>
        <div className="top-bar">
          <input
            type="text"
            placeholder="Feel like creating a note?"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button className="onSubmitButton" type="button" onClick={createNotes}>
            <a>+</a>
          </button>
        </div>
        <div className="noteList">
          <ul>
          {notes.map((item, index) => (
            <li key={item.id || index}>
             {typeof item === "object" ? item.notes : item}
            </li>
          )) }
          </ul>
        </div>
      </form>
    </div>
  );
};

export default NoteSystem;
