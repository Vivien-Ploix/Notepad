import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import NoteDisplay from "./components/NoteDisplay/NoteDisplay"
import MarkDownInput from "./components/MarkDownInput/MarkDownInput"
import 'bootstrap/dist/css/bootstrap.css';
import "./index.scss"

import NotesList from "./components/NotesList/NotesList"

const App = () => {
  const [notes, setNotes] = useState([]);
  const [input, setInput] = useState({});




  const getNotes = () => {
    let notes = [];
    for( let i = 0; i < localStorage.length; i++){
      let title = localStorage.key(i);
      let content = localStorage.getItem(localStorage.key(i))
      notes.push({name: title, text: content});
    }
    setNotes(notes);
  }

  useEffect(() => {
    getNotes();
  }, [localStorage.length]);
  
  const showNote = (title, content) => {
    setInput({title: title, content: content});
  }

  const clearAll = () => {
    localStorage.clear();
    setNotes([])
  }

  const newNote = () => {
    setInput({})
  }

  const handleInputChange = (name, value) => { if(name !== undefined && value !== undefined) {setInput({
    ...input,
    [name]: value
  })}}


  return (
    <>
      <h1>Notepad</h1>
      <div className="container row d-flex nowrap">
          <NotesList notes={notes} showNote={showNote} clearAll={clearAll}  newNote={newNote}/>
          <div className="bloc">
            <NoteDisplay input={input}/>
            <MarkDownInput input={input} handleInputChange={handleInputChange} getNotes={getNotes} newNote={newNote}/>
          </div>
      </div>
    </>
  );
}

ReactDOM.render(
  <App />,
  document.querySelector("#root")
)