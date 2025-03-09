import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Contact from './Components/Contact/Contact.jsx'
import User from './Components/User/User.jsx'
import GitHub, { githubInfoLoader } from './Components/Github/GitHub.jsx'
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        path: "",
        element: <Home/>
      },
      {
        path: "about",
        element: <About/>
      },
      {
        path: "contact",
        element: <Contact/>
      },
      {
        path: "user/:id",
        element: <User/>
      },
      {
        path: "github",
        element: <GitHub/>,
        loader : githubInfoLoader
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>,
)
