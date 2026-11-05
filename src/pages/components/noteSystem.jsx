import { useState, useEffect } from "react";
import axios from "axios";
import "./noteSystem.css";

const NoteSystem = () => {

  const [note, setNotes] = useState([]);

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

  function createNotes() {
    let note = prompt('Enter note text');
    fetch('http://localhost:3001/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({note}),
    })
      .then(response => {
        return response.text();
      })
      .then(data => {
        alert(data);
        getNotes();
      });
  }

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
          />
          <button className="onSubmitButton">
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
