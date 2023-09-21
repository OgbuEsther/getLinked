import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SIgnIn from './auth/SIgnIn'
import AuthForm from './auth/SignUp'


function App() {
  const [count, setCount] = useState(0)

  return (
  <div>
    <AuthForm />
  </div>
  )
}

export default App
