import { useState } from "react"
import React from 'react'

const TextForm = (props) => {
    const [text,setText] = useState('');
    const handleUpClick =()=>{
        let newText = text.toUpperCase();
        setText(newText)
       
    }
    const handledownClick =()=>{
        let newText = text.toLowerCase();
        setText(newText)
    
    }
    const handleClearClick =()=>{
        let newText = ('');
        setText(newText)
        
    }
    const handleCopy = () => {
        navigator.clipboard.writeText(text); 
        
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
      
    }

    const handleOnChange =(event)=>{
        console.log("onChange")
        setText(event.target.value)
    }

    return (
        <>
        <div className="container">
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-2 mt-1" onClick={handleUpClick}>Convert to uppercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 mt-2" onClick={handledownClick}>Convert to lowercase</button>
            <button  disabled={text.length===0}className="btn btn-primary mx-2 mt-2" onClick={handleClearClick}>Clear text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 mt-2" onClick={handleCopy}>Copy Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 mt-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            </div>
            <div className="container my-2">
                <h1>Your text summary</h1>
                <p>{text.split(" ").length}words and {text.length} characters</p>
                <p>{0.008 * text.split("").length}Minutes to read</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
            </>
    )
}

export default TextForm