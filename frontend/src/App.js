import React, { useState } from "react";
import './App.css';

function App() {
  const [notes, setNotes] = useState([]);
  const [note, setNote] = useState("");

  const addNote = () => {
    if (note.trim() !== "") {
      setNotes([...notes, note]);
      setNote("");
    }
  };

  const deleteNote = (index) => {
    const newNotes = notes.filter((_, i) => i !== index);
    setNotes(newNotes);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Notes Organizer</h1>

        <div className="note-input">
          <input
            type="text"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="Enter your note"
            className="input-field"
          />
          <button onClick={addNote} className="add-button">
            Add Note
          </button>
        </div>

        <div className="note-list">
          <h2>Your Notes</h2>
          {notes.length === 0 ? (
            <p className="empty-message">No notes yet! Add some.</p>
          ) : (
            <ul>
              {notes.map((note, index) => (
                <li key={index} className="note-item">
                  <span>{note}</span>
                  <button onClick={() => deleteNote(index)} className="delete-button">
                    ✖
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
