import React from "react";
import Showdown from "showdown"
import "./notedisplay.scss"

const converter = new Showdown.Converter();

const NoteDisplay = (props) => {


  function createMarkupContent() {
    let HTMLText = converter.makeHtml(props.input.content)
    return {__html: HTMLText};
  }

  return (
    <div className="display" >
      <div className="card bg-secondary h-100">
        <div className='card-header'>
          <h4>{props.input.title} </h4>
        </div>
        <div className="card-body"  dangerouslySetInnerHTML={createMarkupContent()}></div>
      </div>
    </div>
  )
}

export default NoteDisplay;