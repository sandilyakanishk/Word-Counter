    import React, {useState } from 'react'
    // import './style.css';


    export default function TextForm(props) {
        const handleUpClick = ()=>{
            console.log("Uppercase Clicked" + text);
            let newText = text.toUpperCase();
            setText (newText)
        }    
        const handleLoClick = ()=>{
            console.log("Lowercase Clicked" + text);
            let newText = text.toLowerCase();
            setText (newText)
        }
        const handleClearclick = (event) => {
            let newText = '';
            setText (newText)
        }

        const handleOnChange = (event)=>{
            // console.log("OnChnage");
            setText (event.target.value)
        }

        const [text, setText] = useState('');
    return (
        <>
        <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value = {text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
            </div>
            <button className="btn btn-dark mx-2" onClick={handleUpClick} >Convert to Uppercase</button>
            <button className="btn btn-dark mx-2" onClick={handleLoClick} >Convert to Lowercase</button>
            <button className="btn btn-dark mx-2" onClick={handleClearclick} >Clear Text</button>
        </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
            <h1>Your text Summary</h1>
            <p>{ text.split(" ").length} words and { text.length } characters</p>
            <p> {0.008 * text.split(" ").length} Minutes reading Time </p>
            <h2>Preview</h2>
            <p>{text.length > 0 ? text : <span style={{ color: 'red' }}>Enter your text in the above textbox to preview it</span>}</p>
        </div>
        </>
    )
    }
