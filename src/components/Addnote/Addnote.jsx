import { useState } from "react";
import "./Addnote.css";
import toast from "react-hot-toast";

function Addnote({ setNotes }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const submithandeler = (e) => {
    const info = {
      title: e.target.title.value,
      description: e.target.description.value,
      id: new Date().toISOString(),
      isfinished: false,
    };

    setNotes((prevnote) => [...prevnote, info]);

    toast.success('Adding a note was successful.')
    e.preventDefault();

    setTitle("");
    setDescription("");
  };

  return (
    <form className="form-section" onSubmit={submithandeler}>
      <h2>Add Note</h2>

      <div className="form-group">
        <label>Title</label>
        <input
          type="text"
          id="note-title"
          name="title"
          value={title}
          placeholder="Enter note title..."
          onChange={(e) => setTitle(() => e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Description</label>
        <textarea
          id="note-description"
          name="description"
          value={description}
          placeholder="Note details..."
          onChange={(e) => setDescription(() => e.target.value)}
        ></textarea>
      </div>

      <button type="submit" className="add-button">
        Add
      </button>
    </form>
  );
}

export default Addnote;
