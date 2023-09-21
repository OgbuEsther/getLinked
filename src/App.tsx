import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SIgnIn from './auth/SIgnIn'
import AuthForm from './auth/SignUp'
import HomeScreen from './home/HomeScreen'


function App() {
  const [count, setCount] = useState(0)

  return (
  <div>
    {/* <AuthForm /> */}
    <HomeScreen />
  </div>
  )
}

export default App
