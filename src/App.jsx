import React, { useState } from "react";
import Notes from "./Components/Notes";
import Footer from "./Components/Footer";

export default function App() {
  const [listNotes, setListNotes] = useState([
    { id: 1, title: "HTML", content: "Hyper Text Mark-Up Language" },
    { id: 2, title: "CSS", content: "Style Sheet" },
    {
      id: 3,
      title: "JavaScript",
      content: "Scripting Language for Web Development",
    },
  ]);

  // State for the new note title and content
  const [newTitle, setNewTitle] = useState("");
  const [newContent, setNewContent] = useState("");

  // Function to add a new note
  const addNote = () => {
    if (newTitle.trim() === "" || newContent.trim() === "") {
      return; // Prevent adding empty notes
    }
    const newNote = {
      id: Date.now(), // Generate a unique id using the current timestamp
      title: newTitle,
      content: newContent,
    };
    setListNotes([...listNotes, newNote]); // Add the new note to the list
    setNewTitle(""); // Clear the input fields after adding
    setNewContent("");
  };

  // Function to remove a note
  const removeNote = (id) => {
    setListNotes(listNotes.filter((note) => note.id !== id));
  };

  return (
    <div className="App">
      {/* Pass the notes and remove function to Notes component */}
      <Notes notes={listNotes} removeNote={removeNote} />

      {/* Pass the necessary props to Footer for adding new notes */}
      <Footer
        newTitle={newTitle}
        setNewTitle={setNewTitle}
        newContent={newContent}
        setNewContent={setNewContent}
        addNote={addNote}
      />
    </div>
  );
}
