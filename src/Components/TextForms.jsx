import React, { useState } from 'react'

function TextForms(props) {
    const [text,setText]=useState('');
    const handleText=(event)=>{
        console.log("text");
        setText(event.target.value);
    }
    const handleUpperCase = () => {
        setText(text.toUpperCase());
    }
     const handleLowerCase = () => {
        setText(text.toLowerCase());
    }
  return (
    <>
    <div className="container">
        
    <h5>{props.heading}</h5>
    <div>
         <textarea className="form-control" id="textBox" rows="8" value={text} onChange={handleText}></textarea>
    </div>
     <button className="btn btn-primary my-3" onClick={handleUpperCase}>Convert UpperCase</button>
     <button className="btn btn-primary my-3 mx-2" onClick={handleLowerCase}>Convert LowerCase</button>
    </div>
    <div className="container">
        <p> <b>{text.split(" ").length} </b> Words <span> || </span> <b>{text.length}</b> Charaters</p>
    </div>
    </>
  )
}

export default TextForms