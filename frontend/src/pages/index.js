import { useEffect, useState } from "react";
import NoteForm from "../components/NoteForm";
import NoteList from "../components/NoteList";

export default function Home() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetch("/api/notes")
      .then((res) => res.json())
      .then(setNotes);
  }, []);

  return (
    <div className="container">
      <h1>Smart Notes Organizer</h1>
      <NoteForm setNotes={setNotes} />
      <NoteList notes={notes} setNotes={setNotes} />
    </div>
  );
}
