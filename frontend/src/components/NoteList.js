import React from 'react';

export default function NoteList({ notes, setNotes }) {
  const deleteNote = async (id) => {
    await fetch(`/api/notes/${id}`, { method: "DELETE" });
    setNotes((prev) => prev.filter((note) => note._id !== id));
  };

  return (
    <div>
      {notes.map((note) => (
        <div 
          key={note._id} 
          style={{ 
            backgroundColor: '#ffe4e1', 
            padding: '15px', 
            margin: '10px', 
            borderRadius: '8px',
            boxShadow: '2px 2px 10px rgba(0,0,0,0.1)',
            position: 'relative'
          }}
        >
          <h3 style={{ color: '#d147a3' }}>{note.title}</h3>
          <p>{note.content}</p>
          <p><strong>Category:</strong> {note.category || "Uncategorized"}</p>
          <p><strong>Summary:</strong> {note.summary || "No summary available"}</p>
          <p><strong>Sentiment:</strong> {note.sentiment || "Not analyzed"}</p>
          <button 
            onClick={() => deleteNote(note._id)} 
            style={{ 
              backgroundColor: '#ff69b4', 
              color: 'white', 
              border: 'none', 
              padding: '8px 12px', 
              borderRadius: '5px',
              cursor: 'pointer',
              position: 'absolute',
              top: '10px',
              right: '10px'
            }}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}
