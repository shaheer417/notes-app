import React from "react";

export default function Notes({ notes, removeNote }) {
  return (
    <div className="notes">
      <div className="sections">
        {notes.map((note) => (
          <section key={note.id} className={note.title.toLowerCase()}>
            <h2>Title: {note.title}</h2>
            <p>Note: {note.content}</p>
            <button onClick={() => removeNote(note.id)}>X</button>
          </section>
        ))}
      </div>
    </div>
  );
}
