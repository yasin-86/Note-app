import { useState } from "react";
import "./App.css";
import Addnote from "./components/Addnote/Addnote";
import Noteslist from "./components/Noteslist/Noteslist";

function App() {
  const [notes, setNotes] = useState([]);
  return (
    <>
      <div className="main">
        <Addnote setNotes={setNotes} />
        <Noteslist notes={notes} setNotes={setNotes} />
      </div>
    </>
  );
}

export default App;
