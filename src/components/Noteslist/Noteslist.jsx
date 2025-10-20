import Noteitem from "../Noteitem/Noteitem";
import "./Noteslist.css";

function Noteslist() {
  return (
    <section class="notes-section-layout">
      <header class="notes-header">
        <div class="sort-dropdown">
          <label for="sort-by">Sort By:</label>
          <select id="sort-by" name="sort">
            <option value="latest">Latest</option>
            <option value="oldest">Oldest</option>
          </select>
          <h1>Notes Count:</h1>
        </div>
      </header>
        <Noteitem />
    </section>
  );
}

export default Noteslist;
