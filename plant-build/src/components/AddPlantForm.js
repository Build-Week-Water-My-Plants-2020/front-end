import React, { useState } from "react";

const NoteForm = (props) => {

  const [note, setNote] = useState({ title: props.title });

  const handleChanges = (event) => {
    console.log("change handled!", event.target.value);
  
    setNote({ title: event.target.value });
    
  };


  const submitForm = (event) => {
    event.preventDefault();
    props.addNewNote(note);
  };


  console.log("note", note);
  return (
    <form onSubmit={submitForm}>
      
      <label htmlFor="title">Plant Name</label>
      <input
        id="title"
        type="text"
        placeholder="Enter title"
        value={note.title}
        onChange={handleChanges}
      />
      
      <button type="submit">Add Plants</button>
    </form>
  );
};

export default NoteForm;