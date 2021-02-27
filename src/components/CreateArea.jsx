import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
  const [inputNote, setInputNote] = useState({ title: "", content: "" });
  const [isExpanded, setExpanded] = useState(false);

  function handleChange(event) {
    // Destructured object to get hold of event.target.name and value
    const { name, value } = event.target;
    setInputNote((prevInputNote) => {
      // [] are needed to use the variable rather than a String "name"
      // ... spread operator
      return { ...prevInputNote, [name]: value };
    });
  }

  function submitNote(event) {
    props.addNote(inputNote);
    setInputNote({ title: "", content: "" });
    // prevents the page from reloading when the button is pressed inside a form
    event.preventDefault();
  }

  return (
    <div>
      <form className="create-note">
        {isExpanded && (
          <input
            onChange={handleChange}
            name="title"
            placeholder="Title"
            value={inputNote.title}
          />
        )}
        <textarea
          onClick={() => setExpanded(true)}
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows={isExpanded ? "3" : "1"}
          value={inputNote.content}
        />
        <Zoom in={isExpanded}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
