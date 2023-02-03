import { useState } from "react";
import './ColorDropDown.css'

const options = ["pink", "green", "blue"];

function ColorDropDown() {
    
    const [isOpen, setIsOpen] = useState(false);
    const toggling = () => setIsOpen(!isOpen);
    const [selectedColor, setSelectedColor] = useState("")
    const [selectedOption, setSelectedOption] = useState(null);
    const [display, setDisplay] = useState(false)


    const onOptionClicked = value => () => {
      setSelectedOption(value);
      setIsOpen(false);
      setSelectedColor(value);
    };


    const createDivBox = (a:string) => {
       
        if(!a){
            alert("please select Color")
            return
        }
       setSelectedColor(a);
    
        setDisplay(true)
     setTimeout(()=>{
        setDisplay(false)
     }, 1000)
    }

    return (
      <div>
        <br></br>
        <button 
        className="waves-effect waves-light btn gap"
        onClick={()=>{createDivBox(selectedColor)}}>
             + 
        </button>
        <div onClick={toggling} className="btn dropdown-trigger">
        <i className="material-icons right">↓</i>
        {selectedOption || "Choose one color"}
            {isOpen && (
        <ul>
            {options.map(option => (
                <li onClick={onOptionClicked(option)} key={Math.random()}>
                  {option}
                </li>
            ))}
        </ul>
         )}
        </div>
        <div className="box" style={display ? {display:"block"} : {display:"none"}            } >
                <div className="box1"  style={{"backgroundColor": selectedColor}} > </div>
        </div>  
      </div>
    )
  }
  
  export default ColorDropDown