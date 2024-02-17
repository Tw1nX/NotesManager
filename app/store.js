import { create } from "zustand";

function getNotes() {
  return JSON.parse(localStorage.getItem('notes')) ?? [];
}

const useNotes = create((set) => ({
  notes: getNotes(),
  note: null,
  setNotes: (noteContent) => set((state) => {
    const newNote = { id: Date.now(), content: noteContent };
    const newNotes = [...state.notes, newNote];
    localStorage.setItem('notes', JSON.stringify(newNotes));
    return {
      notes: newNotes
    };
  }),
  getNoteById: (id) => {
    set((state) => {
    const note = state.notes.find(note => note.id === Number(id)) || null;
    return {
        note
    }});
  },
}));

export default useNotes;
