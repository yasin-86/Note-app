import { useState } from "react";
import Filternotes from "../Filternotes/Filternotes";
import Noteitem from "../Noteitem/Noteitem";
import "./Noteslist.css";

const data = [
  { title: "All", id: 1 },
  { title: "Complete", id: 2 },
  { title: "UnComplete", id: 3 },
];

function Noteslist({ notes, setNotes }) {
  const [active, setActive] = useState(1);
  const handleactive = (id) => {
    setActive(id);
  };

  let filteredNotes;
  switch (active) {
    case 1:
      filteredNotes = notes;
      break;
    case 2:
      filteredNotes = notes.filter((note)=> note.isfinished);
      break;
      case 3:
      filteredNotes = notes.filter((note)=> !note.isfinished);
      break;
    default:
      break;
  }
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
        <Filternotes
        data={data}
        active={active}
        handleactive={handleactive}
        />
      </div>
      <br />
      <hr className="hr" />
      <div className="div">
        <br />
        {filteredNotes.length ? (
          filteredNotes.map((note) => (
            <Noteitem
              key={note.id}
              note={note}
              setNotes={setNotes}
              notes={notes}
            />
          ))
        ) : (
          <p className="text">No note yet...</p>
        )}
      </div>
    </section>
  );
}

export default Noteslist;
