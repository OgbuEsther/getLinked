import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import HomeScreen from './home/HomeScreen'
import SIgnIn from './auth/SIgnIn'
import AuthForm from './auth/SignUp'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/* <App /> */}
    <HomeScreen />
    {/* <SIgnIn /> */}
   
  </React.StrictMode>,
)
