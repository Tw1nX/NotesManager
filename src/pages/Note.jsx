import { useParams } from "react-router-dom";
import { useNotes } from "../store";

export default function Note() {
  const { id } = useParams();
  const { notes } = useNotes()
  return (
    <div>Note id: {id}
    <h3>Note content: {notes[id].content}</h3>
    </div>
  );
}
