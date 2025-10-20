import "./Noteitem.css";

function Noteitem() {
    return(
        <ul class="note-list-ul">
        <li class="note-item-row">
          <div class="note-info-group">
            <span class="note-title-display">Title</span>
            <span class="note-date-display">29/07/00</span>
          </div>

           <button class="delete-button" aria-label="Delete note">
                <i class="fas fa-trash"></i> 
            </button>
            <button class="edit-button" aria-label="edit note">
                <i class="fas fa-edit"></i> 
            </button>
        </li>
      </ul>
    )
}

export default Noteitem;