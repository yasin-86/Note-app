import Noteitem from "../Noteitem/Noteitem";
import "./Noteslist.css";

function Noteslist({notes}) {
  return (
    <section className="notes-section-layout">
      <header className="notes-header">
        <div className="sort-dropdown">
          <label>Sort By:</label>
          <select id="sort-by" name="sort">
            <option value="latest">Latest</option>
            <option value="oldest">Oldest</option>
          </select>
          <h1>Notes Count:{notes.length}</h1>
        </div>
      </header>

      <div className="div">
        {notes.map((note)=> <Noteitem key={note.id} note={note}/>)}
      </div>
        
    </section>
  );
}

export default Noteslist;
