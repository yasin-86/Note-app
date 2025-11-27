import toast from "react-hot-toast";
import "./Noteitem.css";

function Noteitem({ note, setNotes, notes }) {
  const handleDelete = (id) => {
    const newNote = notes.filter((note) => note.id !== id);

    setNotes(() => newNote);
    toast('Note deletion was successful.✔️', {
    icon: '🗑️',
});
  };

  const handlecheked = (id)=>{
    const result = notes.map((note)=>{
      return note.id == id ? {...note,isfinished : !note.isfinished} : note;
      
    })
    setNotes(result)
  }
  return (
    <ul className={`note-list-ul ${note.isfinished ? "complete" : ""}`}>
      <li className="note-item-row">
        <div className="note-info-group">
          <span className="note-title-display">{note.title}</span>
          <span className="note-date-display">{note.id}</span>
          <span className="note-date-display">{note.description}</span>
        </div>

        <button
          onClick={() => handleDelete(note.id)}
          className="delete-button"
          aria-label="Delete note"
        >
          <i className="fas fa-trash"></i>
        </button>
        <button className="edit-button" aria-label="edit note">
          <i className="fas fa-edit"></i>
        </button>
        <button className="check-button" aria-label="edit note" onClick={()=>handlecheked(note.id)}>
          <i className="fas fa-check"></i>
        </button>
      </li>
    </ul>
  );
}

export default Noteitem;
