import { useState, useEffect } from "react";
import axios from "axios";
import "./noteSystem.css";

const NoteSystem = () => {

  const [note, setNotes] = useState([]);
  const [text, setText] = useState("");

  const getNotes = async () => {
    try {
      const res = await axios.get(
        `http://localhost:3001`
      );
      console.log(res.data);
      setNotes(res.data);

    } catch (error) {
      console.log(error);
    }
  };

  const createNotes = async () => {
    if (!text.trim()) return;
    try {
      await axios.post("http://localhost:3001/create", { notes: text });
      setText("");
      getNotes();
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
          <button className="onSubmitButton" onClick={createNotes}>
            <a>+</a>
          </button>
        </div>
        <ul>
          {note.map((n) => {
            <li key={n.id}>{n.note}</li>
          }) }
        </ul>
      </form>
    </div>
  );
};

export default NoteSystem;
