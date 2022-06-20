import React,{useState} from 'react'

export default function Textform(props) {    
    const [button,updatebtn]=useState("Convert to Upper Case")
    const [text, setText]=useState("");
    const word=(text)=>{
        let a=text.split(" ")
        if (a.indexOf("")===-1){
            return a.length
        }
        else{
            a.pop(a.indexOf(""))
            return a.length
        }
    }
    const handleonChange=(Event)=>{
        setText(Event.target.value)
    }
    
    const handleupClick=()=>{
        if (button==="Convert to Upper Case"){
            let newText=text.toUpperCase();
            setText(newText)
            updatebtn("Convert to Lower Case")
        }
        else if (button==="Convert to Lower Case"){
            let newText=text.toLowerCase();
            setText(newText)
            updatebtn("Convert to Upper Case")
        }
    }

    const reset=()=>{
        setText("")
    }
    console.log(text.split(" "))
    return (
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleonChange} id="mybox" rows="8"></textarea>
            </div>
            <div>
            <button className="btn btn-primary" onClick={handleupClick}>{button}</button>
            <button className="btn btn-primary mx-3" onClick={reset}>Reset</button>
            </div>
            <div className="origionaltext">
                <p>Text length is  {text.length}. Total word is  {word(text)} </p>
                <p>Your origional text is {text.toLowerCase()}</p>
            </div>
        </div>
    )
}
