'use client'

import { useParams } from 'next/navigation';
import useNotes from '../store';

export default function Note() {
  const { pid: id } = useParams();
  const { getNoteById, note } = useNotes()
  getNoteById(id)
  
  if (!note) {
    return <p>Note not found!</p>;
  }

  return (
    <div>
      <h2>Note id: {note.id}</h2>
      <p>Note content: {note.content}</p>
    </div>
  );
}
