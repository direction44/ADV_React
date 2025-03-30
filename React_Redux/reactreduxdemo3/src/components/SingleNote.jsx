import React from "react";

function SingleNote({ note, index, deletePerNotes }) {
  return (
    <li className="note">
      <h5><strong>{note.title}</strong></h5>
      <p>{note.content}</p>
      <button className="delete" onClick={() => deletePerNotes(index)}>
        Delete
      </button>
    </li>
  );
}

export default SingleNote;
