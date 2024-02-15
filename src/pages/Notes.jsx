import { useEffect, useRef } from "react";
import { Form, Link } from "react-router-dom";
import { useNotes } from "../store";
import { deleteNote, saveNote } from "../utils/manageNotes";

export default function Notes() {
    const inputRef = useRef(null);
    const {notes, setNotes} = useNotes();
  
    useEffect(() => {
      setNotes(JSON.parse(localStorage.getItem('notes')) ?? []);
    }, []);
  
    return (
      <div className="px-48 py-8 grid gap-4">
        <Form className="flex gap-4" onSubmit={() => saveNote(inputRef, setNotes)}>
          <input type="text" ref={inputRef} className="w-full border border-black" required />
          <button className="px-10 py-2 bg-green-400">
            Save
          </button>
        </Form>
        <div className="grid gap-5">
          {notes.length > 0 &&
            notes.map((item) => (
              <Link key={item.id} to={'/' + item.id} className="flex gap-4 group">
                <h1>{item.content}</h1>
                <button
                  onClick={() => deleteNote(item.id, setNotes)}
                  className="hidden px-4 bg-red-400 group-hover:block"
                >
                  Delete
                </button>
              </Link>
            ))}
        </div>
      </div>
    )}
