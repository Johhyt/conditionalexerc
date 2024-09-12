import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [login, setLogin] = useState(false)
  const [username, setUsername] = useState('')

  const buttonText = login ? 'Logout' : 'Login'

  function loginPressed(){
    setLogin(!login);
  }

  function usernameChanged(event){
    setUsername(event.target.value);
  }

  return (
    <>
    {
      login &&
      <h2>MORO!!!</h2>
    }
      <input value={username} onChange={usernameChanged}/>
      <button onClick={loginPressed}>{buttonText}</button>
    </>
  )
}

export default App
