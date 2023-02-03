import { useRef, useEffect } from "react";

function FirstInput() {
   const inputRef = useRef();
   
   useEffect (()=>{
    if(inputRef.current){
        inputRef.current.focus();
    }
    
   }, [])


    return (
      <div>
       <input 
       type='text' 
       placeholder="write something"
       ref={inputRef}
       />
      </div>
    )
  }
  
  export default FirstInput