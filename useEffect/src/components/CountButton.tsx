import { useRef, useEffect, useState } from "react";


function CountButton() {
const [count, setCount] = useState(0)

    return (
      <div>
        <br></br>
    <button 
    className="waves-effect waves-light btn-large"
    onClick={()=>{
        setCount((count + 1))
    }}
    > 
        Count: {count}
    </button>
    <h1> {count*2}</h1>
      </div>
    )
  }
  
  export default CountButton