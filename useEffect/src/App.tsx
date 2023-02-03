import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import './App.css'
import FirstInput from './components/FirstInput'
import SecondInput from './components/SecondInput'
import DisabledButton from './components/DisabledButton'
import CountButton from './components/CountButton'
import ColorDropDown from './components/ColorDropDown'

function App() {

  return (
    <div>
      <div className='blocks'>
     <FirstInput  />
     <SecondInput />
     <DisabledButton />
     <CountButton /> 
     <ColorDropDown />
     </div>
      <div className='blocks'>
      
      </div>
    </div>
  )
}

export default App
