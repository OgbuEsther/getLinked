import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import HomeScreen from './home/HomeScreen'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/* <App /> */}
    <HomeScreen />
  </React.StrictMode>,
)
