import { cloneElement, useRef } from "react";


function Task2() {
    
    const box = useRef();
// const cloneElement = () => {
    

// }

const cloneElement = () => {
  if (box.current) {
    const boxElement = box.current
    const clone = boxElement.cloneNode(true)
    boxElement.parentNode?.appendChild(clone)
  }
}
  

    return (
      <div>
      <div>
        <div 
        // className="myBox"
        style={{ 
            width: "100px", 
            height: "100px", 
            backgroundColor: "grey", 
            marginLeft: "50px", 
            marginTop: "10px",
            display: "inline-block",
            marginBottom: "10px"}}
            ref={box}
        >
        </div>
      
    </div>
      <button className="btn waves-effect waves-light changeColor" onClick={cloneElement}>Clone box</button>
      </div>
    )
  }
  
  export default Task2