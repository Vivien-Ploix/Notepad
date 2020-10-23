import React from "react";
import "./noteslist.scss"

import Showdown from "showdown"
const converter = new Showdown.Converter();
const NotesList = (props) => {

  const showNotes = props.notes.map((note) => (
    <div className="note" onClick={() => props.showNote(note.name, note.text)}>
      <div> 
        <h4>{note.name}</h4>
        <p dangerouslySetInnerHTML={createMarkup(note.text)}/>
      </div>
    </div>
  ));

  function createMarkup(text) {
    let HTMLText = converter.makeHtml(text)
    return {__html: HTMLText};
  }

  return (
    <div className="list">
      <div className="buttons">
        <button className="btn btn-danger align-self-center" onClick={props.clearAll}>Supprimer tout</button>      
        <button className="btn btn-warning align-self-center" onClick={props.newNote}>Ajouter une note</button>
      </div>    
      {showNotes}
    </div>
  )
}

export default NotesList;