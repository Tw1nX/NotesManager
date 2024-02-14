import { useEffect, useRef, useState } from "react";
import { deleteNote, saveNote, sortNotes } from "../utils/manageNotes";

export default function Notes() {
    const inputRef = useRef(null);
    const [notes, setNotes] = useState([]);
  
    useEffect(() => {
      setNotes(JSON.parse(localStorage.getItem('notes')) ?? []);
    }, []);
  
    return (
      <div className="px-48 py-8 grid gap-4">
        <form className="flex gap-4" onSubmit={() => saveNote(inputRef, setNotes)}>
          <input type="text" ref={inputRef} className="w-full border border-black" required />
          <button className="px-10 py-2 bg-green-400">
            Save
          </button>
        </form>
        <button
          className="justify-self-start px-4 py-2 bg-slate-600 text-white"
          onClick={() => sortNotes(setNotes)}
        >
          Sort by data
        </button>
        <div className="grid gap-5">
          {notes.length > 0 &&
            notes.map((item) => (
              <div key={item.id} className="flex gap-4 group">
                <h1>{item.content}</h1>
                <button
                  onClick={() => deleteNote(item.id, setNotes)}
                  className="hidden px-4 bg-red-400 group-hover:block"
                >
                  Delete
                </button>
              </div>
            ))}
        </div>
      </div>
    )}
