'use client'

import Link from 'next/link';
import { useRef } from "react";
import useNotes from "./store";

export default function Notes() {
  const { notes, setNotes } = useNotes();
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault()
    const inputVal = inputRef.current.value;
    setNotes(inputVal);
    inputRef.current.value = '';
  };

  return (
    <main className="flex flex-col mt-10 w-4/5 mx-auto">
      <form className="flex bg-rose-500 p-4 rounded-md shadow-md mb-4" onSubmit={handleSubmit}>
        <input 
          type="text" 
          ref={inputRef} 
          className="w-full p-2 border rounded-md focus:outline-none focus:border-indigo-600"
          placeholder="Enter your note"
          required
        />
        <button 
          className="bg-indigo-500 text-white py-2 px-4 ml-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:shadow-outline-indigo"
        >
          Save
        </button>
      </form>
      <div className="grid gap-4">
        {notes.length > 0 && notes.map(note => (
          <Link key={note.id} href={`/${note.id}`}>
            <h2 className="text-gray-900 rounded-md bg-gray-100 hover:shadow-md transition duration-300 block p-2 text-left">
              {note.content}
            </h2>
          </Link>
        ))}
      </div>
    </main>
  );
}
