import React, {useState} from 'react'
import Title from './components/Title'
import './App.css';

export default function ESignatureApp() {

    const inputStyles = {
        border: "none",
        padding: "10px",
        borderBottom: "2px dotted",
        outline: "none",
        boxShadow: "10px 10px 26px 0px rgba(0,0,0,0.75)",
    }
    document.body.style.background = "#eee"

    const [text, setText] = useState("Type Your Name")
    const [date, setDate] = useState("Set Date")

    function updateText(event){
        setText(event.target.value)
    }

    function updateDay(event){
        setDate(event.target.value)
    }

  return (
    <div style={{padding: "0 40px", marginTop: "40px"}}>
    
      <Title text={text} text2={date}/>

      <p className='text_center m-t4 text'>This is a practice project in <span>react.js</span> that, use Components, conditional rendering, ES7 , input & events listners, useState hook, inline stylings etc...</p>

      <p className='text_center app_name'>make your signature here</p>

      <footer style={{display: "flex", justifyContent: 'space-around', position: "relative", bottom: "3vh" }}>
        <input type="date" value={date} onChange={updateDay} style={inputStyles}/>
        <input name='text' type="text" value={text} onChange={updateText} style={inputStyles}/>
      </footer>
    </div>
  )
}
