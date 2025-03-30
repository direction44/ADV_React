import React from "react";
import SingleNote from "./SingleNote";

function AllNotes({ allNotes, deletePerNotes }) {
  return (
    <div>
      <h4>Notes List</h4>
      <ul>
        {allNotes.map((note, index) => (
          <SingleNote
            key={index}
            note={note}
            index={index}
            deletePerNotes={deletePerNotes}
          />
        ))}
      </ul>
    </div>
  );
}

export default AllNotes;
