import React, { useState, useEffect } from 'react'
import NoteDisplay from '../NoteDisplay/NoteDisplay';
import "./markdown.scss"


export const MarkDownInput = (props) => {

  
  const saveNote = (e) => {
    e.preventDefault();
    localStorage.setItem(`${props.input.title}`, `${props.input.content}`)
    props.getNotes();
    props.newNote();
  }
 
  
  return (
    <>
      <form>
        <div>
          <label>Title:</label>
          <input type="text" name="title" value={"" || props.input.title} onChange={(e) => props.handleInputChange(e.currentTarget.name, e.currentTarget.value)} placeholder="Titre de la note"/>
        </div>
        <div>
          <label>Text:</label>
          <textarea type="text" name="content" value={props.input.content} onChange={(e) => props.handleInputChange(e.currentTarget.name, e.currentTarget.value)} placeholder="Contenu de la note"/>
        </div>
        <button type="submit" className="btn btn-info" onClick={saveNote} >Save</button>
      </form>
    </>
  )
}

export default MarkDownInput;