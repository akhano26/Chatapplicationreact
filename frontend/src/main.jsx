import React, { useContext } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Login from './pages/login/Login.jsx'
import Signup from './pages/signup/Signup.jsx'
import Home from './pages/home/Home.jsx'
import { BrowserRouter } from 'react-router-dom'
import {  AuthContextProvider } from './context/Authcontext.jsx'





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <AuthContextProvider>
    <App/>
    </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
