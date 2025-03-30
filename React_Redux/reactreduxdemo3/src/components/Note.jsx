import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addNote, deleteNote } from "../redux/actions/actionCreators";
import AllNotes from "./AllNotes";
import "./style.css";

function Note() {
  const allNotes = useSelector((state) => state.notes);
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleAddNotes = () => {
    if (title && content) {
      dispatch(addNote({ title, content }));
      setTitle("");
      setContent("");
    }
  };

  const deletePerNotes = (index) => {
    dispatch(deleteNote(index));
  };

  return (
    <div className="container">
      <h2>Notes Taking App</h2>
      <div className="input-container">
        <input
          type="text"
          placeholder="Add Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Add Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button className="add" onClick={handleAddNotes}>
          Add
        </button>
      </div>
      <AllNotes allNotes={allNotes} deletePerNotes={deletePerNotes} />
    </div>
  );
}

export default Note;
