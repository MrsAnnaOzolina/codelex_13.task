import { useRef } from "react";
import './Task1.css'

function Task1() {
    
    const box = useRef();

    const changeColor = () => {
      box.current.style.backgroundColor = "gold";
    };

    return (
      <div >
        <div 
        // className="myBox"
        style={{ width: "100px", height: "100px", backgroundColor: "grey", marginLeft: "50px", marginBottom: "10px"}}
        ref={box}></div>
        <button className="btn waves-effect waves-light changeColor" onClick={changeColor}>Change color</button>
    </div>
    )
  }
  
  export default Task1