import './App.css'
import Card from './Components/Card'
import ThemeBtn from './Components/Themebtn'
import { ThemeProvider } from './Context/theme'
import React, { useState, useEffect } from "react";


function App() {
const [themeMood, setThemeMood] = useState("Light")
const lightMode = ()=>{
  setThemeMood ("Light")
}
const darkMode = ()=>{
  setThemeMood ("dark")
}

useEffect(() => {
  document.querySelector("html").classList.remove("Light", "dark")
  document.querySelector("html").classList.add(themeMood)
}, [themeMood])


  return (
    <ThemeProvider value={{themeMood, lightMode, darkMode}}>
    
<div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                       <ThemeBtn></ThemeBtn>
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                         <Card></Card>
                    </div>
                </div>
            </div>

    </ThemeProvider>
  )
}

export default App
