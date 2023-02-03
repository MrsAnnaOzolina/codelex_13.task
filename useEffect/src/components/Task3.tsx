import { cloneElement, useRef } from "react";
import './Task3.css'


function Task3() {
    
    const box = useRef();
const changes = () => {
    console.log("jwfbjwbfw")
    box.current.style.position = "absolute"
    box.current.style.left = "320px"
   box.current.innerText = "Esmu stūrī"


    
}
  

    return (
      <div>
        <div className="border">
        <div 
        // className="myBox"
        style={{ 
            width: "100px", 
            height: "100px", 
            backgroundColor: "grey", 
            marginLeft: "50px", 
           
            marginBottom: "10px"}}
            ref={box}
        >
          {/* <p style={{color:"grey"}}>Esmu stūrī</p> */}
        </div>
        </div>
        <button className="btn waves-effect waves-light changeColor" onClick={changes}>Send div to corner</button>
    </div>
    )
  }
  
  export default Task3