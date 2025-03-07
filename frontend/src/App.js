import React, { useState } from "react";
import './App.css';

function App() {
  const [notes, setNotes] = useState([]);
  const [note, setNote] = useState("");
  const [summarizedNote, setSummarizedNote] = useState(""); // Store summarized note

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

  const summarizeNote = async (note) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/summarize`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ note }),
      });
      const data = await response.json();
      setSummarizedNote(data.summary); // Update the summarized note
    } catch (error) {
      console.error("Error summarizing the note:", error);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Notes Organizer with AI</h1>

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
                  <button onClick={() => summarizeNote(note)} className="summarize-button">
                    Summarize
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Show the summarized note */}
        {summarizedNote && (
          <div className="summarized-note">
            <h3>Summarized Note:</h3>
            <p>{summarizedNote}</p>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
