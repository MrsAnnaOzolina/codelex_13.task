import { useState } from "react";


function DisabledButton() {
const [isButtonDisabled, setIsButtonDisabled] = useState(true); 

setTimeout(()=> {setIsButtonDisabled(false) }, 5000)


    return (
      <div>
        <br></br>
    <button 
    className="waves-effect waves-light btn-large"
    disabled={isButtonDisabled}
    >
        Disables button for 5 sec. 
        <i className="material-icons right"> ↻ </i>
    </button>
      </div>
    )
  }
  
  export default DisabledButton