import { useEffect } from "react";
import './SecondInput.css'

function SecondInput() {
  



    return (
      <div>
        <form>
       <input 
       type='text' 
       placeholder="write something"
       />
       <button className='submitButton' type="submit">Sumbit</button>
       </form>
      </div>
    )
  }
  
  export default SecondInput