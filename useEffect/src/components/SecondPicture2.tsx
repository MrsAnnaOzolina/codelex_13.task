import { useState, useEffect, useRef } from "react";
import './SecondPicture.css'

function SecondPicture2() {
    const [count, setCount] = useState(0)
    const [input, setInput] = useState("")
    // const [documentTitle, setDocumentTitle] = useState("Codelex 13.task")
    const firstUpdate = useRef(true); 
    const [myFontSize, setMyFontSize] = useState(40)

    

    useEffect(()=>{
      if(firstUpdate.current){
          setCount(100);
          firstUpdate.current= false;
        
          return
      }
       
  })

  const changeTitle = () => {
    document.title = input;
  }

    return (
      <div className="secondPicturebox">
           <div className="secondPicturebox1">
      <button 
      className="waves-effect waves-light btn"
       onClick={()=>{
        setCount((count + 1)),
        setMyFontSize((myFontSize + 1))
    }}> + </button> 
        <h1 style={{fontSize:`${myFontSize}px`}}> Count: {count}</h1>
        <input
        type='text'
        placeholder="write something"
        value={input}
        onChange={(e) => {setInput(e.target.value), changeTitle(input)}}
        ></input>
       <h1>{input}</h1>
       </div>
    </div>
    )
  }
  
  export default SecondPicture2