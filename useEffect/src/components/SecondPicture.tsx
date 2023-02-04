import { useState, useEffect, useRef } from "react";
import './SecondPicture.css'

function SecondPicture() {
    const [count, setCount] = useState(0)
    const [input, setInput] = useState("");
    const firstUpdate = useRef(true); 
  
    // console.log("Render")
    useEffect(()=>{
        if(firstUpdate.current){
            console.log("first render")
            firstUpdate.current= false;
            return
        }
        console.log(" Render")
    })

    

    return (
      <div className="secondPicturebox">
           <div className="secondPicturebox1">
      <button 
      className="waves-effect waves-light btn"
       onClick={()=>{
        setCount((count + 1)), 
        console.log('changing count')
    }}> + </button> 
        <h1> Count: {count}</h1>
        <input
        type='text'
        placeholder="write something"
        value={input}
        onChange={(e) => {setInput(e.target.value), console.log("input change")}}
        ></input>
       <h1>{input}</h1>
       </div>
    </div>
    )
  }
  
  export default SecondPicture