import { cloneElement, useRef } from "react";


function Task2() {
    
    const box = useRef();
const cloneElement = () => {
    

}
  

    return (
      <div>
        <div 
        // className="myBox"
        style={{ 
            width: "100px", 
            height: "100px", 
            backgroundColor: "grey", 
            marginLeft: "50px", 
            marginBottom: "10px"}}
        >
        </div>
        <span  ref={box}></span>
        <button className="btn waves-effect waves-light changeColor" onClick={cloneElement}>Clone box</button>
    </div>
    )
  }
  
  export default Task2