import React, { useState } from 'react'

function TextForms(props) {
    const [text,setText]=useState('');
    const handleText=(event)=>{
        setText(event.target.value);
    }
    const handleSentenceCase = () => {
      setText(text.toLowerCase().replace(/(^\s*\w|[.!?]\s*\w)/g, c => c.toUpperCase()));
      props.showAlert("Text converted to Sentence Case Successfully!","success");
    }
    const handleUpperCase = () => {
        setText(text.toUpperCase());
        props.showAlert("Text converted to Upper Case Successfully!","success");
    }
     const handleLowerCase = () => {
        setText(text.toLowerCase());
        props.showAlert("Text converted to Lower Case Successfully!","success");
    }
    const handleTitleCase = () => {
      setText(text.toLowerCase()
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' '));
      props.showAlert("Text converted to Title Case Successfully!","success");
    }
     const handleClear = () => {
        setText('');
        props.showAlert("Text Cleared Successfully!","success");
    }
    const handleCopy = () => {
      navigator.clipboard.writeText(text)
      props.showAlert("Text copied to clipboard!","success");
    }
    const handleRemoveSpaces = () => {
      setText( text.trim().split(/\s+/).join(" "));
      props.showAlert("Removed Extra Spaces from Text Successfully!","success");
    }
  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
        
      <h5 className='mt-5'>{props.heading}</h5>
      <div className='my-3'>
          <textarea className="form-control" id="textBox" rows="8" value={text} onChange={handleText} style={{backgroundColor:props.mode==='dark'?'#060123':'#e9ecf9',color:props.mode==='dark'?'white':'black',
            border:'1px solid #0d6efd'}}></textarea>
      </div>
      <button className="btn btn-outline-primary my-3 " onClick={handleSentenceCase}>Sentence Case</button>
      <button className="btn btn-outline-primary my-3 ms-2" onClick={handleUpperCase}>UpperCase</button>
      <button className="btn btn-outline-primary my-3 ms-2" onClick={handleLowerCase}>LowerCase</button>
      <button className="btn btn-outline-primary my-3 ms-2" onClick={handleTitleCase}>Title Case</button>
      <button className="btn btn-outline-primary my-3 ms-2" onClick={handleRemoveSpaces}>Remove Extra Spaces</button>
      <button className="btn btn-outline-primary my-3 ms-2" onClick={handleCopy}>Copy</button>
      <button className="btn btn-outline-primary my-3 ms-2" onClick={handleClear}>Clear</button>
    </div>
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
        <p> <b>{text.split(" ").length} </b> Words <span className='mx-2'> || </span> <b>{text.length}</b> Charaters <span  className='mx-2'> || </span>
         <b>{text.split(/[.!?]+/).filter(sentence => sentence.trim() !== '').length}</b> Sentences</p>
    </div>
    </>
  )
}

export default TextForms