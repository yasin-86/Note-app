import "./Noteitem.css";

function Noteitem({note}) {
    return(
        <ul className="note-list-ul">
        <li className="note-item-row">
          <div className="note-info-group">
            <span className="note-title-display">{note.title}</span>
            <span className="note-date-display">{note.id}</span>
            <span className="note-date-display">{note.description}</span>
          </div>

           <button className="delete-button" aria-label="Delete note">
                <i className="fas fa-trash"></i> 
            </button>
            <button className="edit-button" aria-label="edit note">
                <i className="fas fa-edit"></i> 
            </button>
        </li>
      </ul>
    )
}

export default Noteitem;