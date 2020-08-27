import React, { useState } from "react";

const NoteForm = (props) => {
  // Step 3: Set up state for FORM stored in note object. Note this is separate from index.js 'notes'
  const [note, setNote] = useState({ title: props.title });
  // Step 4: Set up onChange event when input text changes (similar to our onClick event used with buttons)
  // This uses https://reactjs.org/docs/events.html#form-events
  const handleChanges = (event) => {
    console.log("change handled!", event.target.value);
    // Step 5: Use text input value to update state
    setNote({ title: event.target.value });
    // Step 12: Refactor inputs and handleChanges to use "name" in updating state
  };

  // Step 8: Create submit form function with addNewNote prop
  const submitForm = (event) => {
    event.preventDefault();
    props.addNewNote(note);
  };
  // Step 13: Clear form onSubmit

  console.log("note", note);
  return (
    <form onSubmit={submitForm}>
      {/* Step 2: Add <label> with htmlFor & update <input> id to create relationship b/t input and label*/}
      {/* Step 1: Create a basic <form> with <input> type=text inside to set up HTML form */}
      <label htmlFor="title">Plant Name</label>
      <input
        id="title"
        type="text"
        placeholder="Enter title"
        value={note.title}
        onChange={handleChanges}
      />
      {/* Step 10: Setting Value with State in <input>*/}

      {/* Step 11: Add note <textarea> and update note state and  */}

      {/* Step 9: Submit form with button and onSubmit */}
      <button type="submit">Add Plants</button>
    </form>
  );
};

export default NoteForm;