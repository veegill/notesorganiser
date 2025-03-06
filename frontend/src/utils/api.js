const API_URL = "https://backend-ids6eywxb-veegills-projects.vercel.app/api";

export const fetchNotes = async () => {
  const res = await fetch(`${API_URL}/notes`);
  return res.json();
};

export const addNote = async (note) => {
  const res = await fetch(`${API_URL}/notes`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(note),
  });
  return res.json();
};

export const deleteNote = async (id) => {
  await fetch(`${API_URL}/notes/${id}`, { method: "DELETE" });
};
