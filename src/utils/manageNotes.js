import { useNotes } from '../store';

export function saveNote(ref) {
  const content = ref.current.value;
  useNotes.getState().setNotes({ content, id: useNotes.getState().notes.length });
  ref.current.value = '';
}

export function deleteNote(id) {
  useNotes.getState().setNotes((prevNotes) =>
    prevNotes.filter((item) => item.id !== id)
  );
}