import React, { useState } from 'react'

function TextForms(props) {
    const [text,setText]=useState('');
    const handleText=(event)=>{
        setText(event.target.value);
    }
    const handleSentenceCase = () => {
      setText(text.toLowerCase().replace(/(^\s*\w|[.!?]\s*\w)/g, c => c.toUpperCase()));
    }
    const handleUpperCase = () => {
        setText(text.toUpperCase());
    }
     const handleLowerCase = () => {
        setText(text.toLowerCase());
    }
    const handleTitleCase = () => {
      setText(text.toLowerCase()
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' '));
    }
     const handleClear = () => {
        setText('');
    }
    const handleCopy = () => {
      navigator.clipboard.writeText(text)
    .then(() => alert('Text copied to clipboard!'))
    .catch(() => alert('Failed to copy text'));
    }
    const handleRemoveSpaces = () => {
      setText( text.trim().split(/\s+/).join(" "));
    }
  return (
    <>
    <div className="container">
        
      <h5>{props.heading}</h5>
      <div>
          <textarea className="form-control" id="textBox" rows="8" value={text} onChange={handleText}></textarea>
      </div>
      <button className="btn btn-outline-success my-3 " onClick={handleSentenceCase}>Sentence Case</button>
      <button className="btn btn-outline-success my-3 ms-2" onClick={handleUpperCase}>UpperCase</button>
      <button className="btn btn-outline-success my-3 ms-2" onClick={handleLowerCase}>LowerCase</button>
      <button className="btn btn-outline-success my-3 ms-2" onClick={handleTitleCase}>Title Case</button>
      <button className="btn btn-outline-success my-3 ms-2" onClick={handleRemoveSpaces}>Remove Extra Spaces</button>
      <button className="btn btn-outline-success my-3 ms-2" onClick={handleCopy}>Copy</button>
      <button className="btn btn-outline-success my-3 ms-2" onClick={handleClear}>Clear</button>
    </div>
    <div className="container">
        <p> <b>{text.split(" ").length} </b> Words <span className='mx-2'> || </span> <b>{text.length}</b> Charaters <span  className='mx-2'> || </span>
         <b>{text.split(/[.!?]+/).filter(sentence => sentence.trim() !== '').length}</b> Sentences</p>
    </div>
    </>
  )
}

export default TextForms