import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [login, setLogin] = useState(false)

  function loginPressed(){
    setLogin(true);
  }

  return (
    <>
      <h2>JONI DOE</h2>
      <button onClick={loginPressed}>Login</button>
    </>
  )
}

export default App
