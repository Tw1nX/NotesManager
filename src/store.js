import { create } from 'zustand';

const notesStore = create((set) => ({
  notes: JSON.parse(localStorage.getItem('notes')) || [],

  setNotes: (note) => {
    set((state) => {
      const newNotes = state.notes.length === 0 ? [note] : [...state.notes, note];
      localStorage.setItem('notes', JSON.stringify(newNotes));
      return { notes: newNotes };
    });
  },
}));

export const useNotes = notesStore;
