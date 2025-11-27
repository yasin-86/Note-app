import { useEffect, useState } from "react";
import "./App.css";
import Addnote from "./components/Addnote/Addnote";
import Noteslist from "./components/Noteslist/Noteslist";
import { Toaster } from "react-hot-toast";

function App() {
  const [notes, setNotes] = useState(() => {
    const saveNotes = localStorage.getItem("note");
    return saveNotes ? JSON.parse(saveNotes) : [];
  });

  useEffect(() => {
    localStorage.setItem("note", JSON.stringify(notes));
  }, [notes]);

  return (
    <>
      <div className="main">
        <Toaster/>
        <Addnote setNotes={setNotes} />
        <Noteslist notes={notes} setNotes={setNotes} />
      </div>
    </>
  );
}

export default App;
