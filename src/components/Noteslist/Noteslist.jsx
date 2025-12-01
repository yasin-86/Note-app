import Filternotes from "../Filternotes/Filternotes";
import Noteitem from "../Noteitem/Noteitem";
import "./Noteslist.css";

function Noteslist({ notes, setNotes }) {
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
      <div className="Filter">
        <Filternotes/>
      </div>
      <br />
      <hr className="hr"/>
      <div className="div">
        <br />
        {notes.length ? notes.map((note) => (
          <Noteitem
            key={note.id}
            note={note}
            setNotes={setNotes}
            notes={notes}
          />
        )) : <p className="text">No note yet...</p>}
      </div>
    
    </section>
  );
}

export default Noteslist;
