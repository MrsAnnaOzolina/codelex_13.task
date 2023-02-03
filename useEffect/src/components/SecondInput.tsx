import { useState } from "react";
import './SecondInput.css'

function SecondInput() {
    const [input, setInput] = useState("");
    const [list, setList] = useState([]);
  
    // useEffect(()=>{ 
    //     setList(list)
    // })
const addText = (text:string) => {
    if (!text) {
        alert("Enter an item ! ");
        return
      }
 const newInput = text
 setList([...list, newInput]);
 setInput("")
} 


    return (
      <div>
        <form
        onSubmit={(e) =>{
            e.preventDefault();
            addText(input)
        }}
        >
       <input 
       type='text' 
       placeholder="write something"
       value={input}
       onChange={(e) => setInput(e.target.value)}
       />
       <button className='submitButton waves-effect waves-light btn-small' type="submit">Sumbit</button>
       </form>
       <div>
        {list.map((text) => (
            <h1>{text}</h1>
        ))}
       </div>
        

      </div>
    )
  }
  
  export default SecondInput