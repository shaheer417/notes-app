import React from "react";

export default function Footer({
  newTitle,
  setNewTitle,
  newContent,
  setNewContent,
  addNote,
}) {
  return (
    <div className="add-notes">
      <h2>Add Notes</h2>

      {/* Controlled input for title */}
      <input
        type="text"
        placeholder="Add Title"
        value={newTitle}
        onChange={(e) => setNewTitle(e.target.value)}
      />

      {/* Controlled input for content */}
      <input
        type="text"
        placeholder="Add Notes"
        value={newContent}
        onChange={(e) => setNewContent(e.target.value)}
      />

      {/* Button to save the note, triggering the addNote function */}
      <button onClick={addNote}>Save</button>
    </div>
  );
}
