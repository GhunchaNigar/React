import React, {useContext, useState} from 'react'
import UserContext from '../Context/UserContext'

function Login() {
    const [username, setusername] = useState('')
    const [password, setpassword] = useState('')
const {setuser} = useContext(UserContext)
    const HandleSubmit = (e) =>{
 e.preventDefault()
 setuser({username,password})
    }
  return (
    <div>
        <h2>Login</h2>
        <input 
        value = {username}
        onChange={(e)=>setusername(e.target.value)}
        type="text" placeholder='username' />
        
        <input
         value = {password}
         onChange={(e)=>setpassword(e.target.value)}
        type="text" placeholder='password' />
<button onClick={HandleSubmit}>Submit</button>
    </div>
  )
}

export default Login