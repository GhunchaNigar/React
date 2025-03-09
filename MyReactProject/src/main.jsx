import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'



function MyApp(){
  return (
    <div>
      <h1>Hello World!</h1>
    </div>
  )
}

const anotherElement = (
<a href="https://google.com" target='_blank'>Visit Google</a>
)
const anotheruser = 'Daniyal Awan'
const reactElement = React.createElement(
  'a',
  {href: 'https://google.com', target: '_blank'},
  'Click me to visit Google',
  anotheruser
)
createRoot(document.getElementById('root')).render(
 
   reactElement
 
)
