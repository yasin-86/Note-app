import "./Addnote.css";

function Addnote() {
  return (
    <form class="form-section">
      <h2>Add Note</h2>

      <div class="form-group">
        <label htmlFor="note-title">Title</label>
        <input
          type="text"
          id="note-title"
          name="title"
          placeholder="Enter note title..."
        />
      </div>

      <div class="form-group">
        <label htmlFor="note-description">Description</label>
        <textarea
          id="note-description"
          name="description"
          placeholder="Note details..."
        ></textarea>
      </div>

      <button type="submit" class="add-button">
        Add
      </button>
    </form>
  );
}

export default Addnote;
