import { useState, useEffect } from "react";
import "./noteSystem.css";

const NoteSystem = () => {

  "const [] = useState('');"

  const [task, setTask] = useState([]);
  const [itemsList, setItemsList] = useState([]);

  function handleChangeInput(event) {
    const inputTask = event.target.value;

    setTask(inputTask);
  }

  function handleAddItemToList(event) {
    event.preventDefault();

    if (!task) {
      return;
    }

    setItemsList([...itemsList, task]);
    setTask("");
  }

  return (
    <div className="task-creator">
      <form onSubmit={handleAddItemToList}>
        <div>
          <input
            type="text"
            placeholder="Feel like creating a note?"
            onChange={handleChangeInput}
            value={task}
          />
          <button className="onSubmitButton">
            <a>Add a note</a>
          </button>
        </div>
        <ul>
          {itemsList.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </form>
    </div>
  );
};

export default NoteSystem;
