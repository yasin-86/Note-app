import "./App.css";
import Addnote from "./components/Addnote/Addnote";
import Noteslist from "./components/Noteslist/Noteslist";

function App() {
  return (
    <>
      <div className="main">
        <Addnote />
        <Noteslist />
      </div>
    </>
  );
}

export default App;
