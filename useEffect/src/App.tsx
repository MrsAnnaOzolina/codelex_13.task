import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import './App.css'
import FirstInput from './components/FirstInput'
import SecondInput from './components/SecondInput'
import DisabledButton from './components/DisabledButton'
import CountButton from './components/CountButton'
import ColorDropDown from './components/ColorDropDown'

import Task1 from './components/Task1'
import Task2 from './components/Task2'
import Task3 from './components/Task3'

import SecondPicture from './components/SecondPicture'
import SecondPicture2 from './components/SecondPicture2'
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
      <SecondPicture />
      <br></br>
      <SecondPicture2 />
      </div>
      <div className='blocks'>
      <Task1 />
      <Task2 />
      <Task3 />
      </div>
    </div>
  )
}

export default App
