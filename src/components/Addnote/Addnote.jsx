import { useState } from "react";
import "./Addnote.css";

function Addnote() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const submithandeler = (e) => {
    const info = {
      title: e.target.title.value,
      description: e.target.description.value,
      id: new Date().toISOString(),
      isfinished: false,
    };
    e.preventDefault();

    console.log(info);

    setTitle("");
    setDescription("");
  };

  return (
    <form class="form-section" onSubmit={submithandeler}>
      <h2>Add Note</h2>

      <div class="form-group">
        <label htmlFor="note-title">Title</label>
        <input
          type="text"
          id="note-title"
          name="title"
          value={title}
          placeholder="Enter note title..."
          onChange={(e) => setTitle(() => e.target.value)}
        />
      </div>

      <div class="form-group">
        <label htmlFor="note-description">Description</label>
        <textarea
          id="note-description"
          name="description"
          value={description}
          placeholder="Note details..."
          onChange={(e) => setDescription(() => e.target.value)}
        ></textarea>
      </div>

      <button type="submit" class="add-button">
        Add
      </button>
    </form>
  );
}

export default Addnote;
