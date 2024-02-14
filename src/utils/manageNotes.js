export function saveNote(ref, setState) {
    const content = ref.current.value;
    setState((prevNotes) => {
      const newNotes = [...prevNotes, { content, id: prevNotes.length }];
      localStorage.setItem('notes', JSON.stringify(newNotes));
      return newNotes;
    });
    ref.current.value = '';
  }

export function deleteNote(id, setState) {
    setState((prevNotes) => {
      const updatedNotes = prevNotes.filter((item) => item.id !== id);
      localStorage.setItem('notes', JSON.stringify(updatedNotes));
      return updatedNotes;
    });
  }

export function sortNotes(setState) {
    setState((prevNotes) => [...prevNotes].sort((a, b) => a.id - b.id));
}