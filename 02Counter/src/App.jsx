import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setcounter] = useState(0)
  // let counter = 0
  const addvalue = () =>{
console.log("value Added", counter);
counter = counter + 1
setcounter (counter)
  }

  const removevalue = () =>{
    console.log("value Removed", counter);
    counter = counter - 1
    setcounter (counter)
      }

  return (
    <>
     <h1>02Custom Project</h1>
     <h2>Counter Value: {counter}</h2>
     <button 
     onClick={addvalue}
     >Increase Counter</button>
     <br></br>
     <button onClick={removevalue}>Decrease Counter</button>
    </>
  )
}

export default App
