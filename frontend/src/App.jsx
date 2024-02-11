
import { Toaster } from 'react-hot-toast'
import './App.css'
import Login from './pages/login/Login.jsx'
import Signup from './pages/signup/Signup.jsx'
import Home from './pages/home/Home.jsx'

import {Navigate, Route, Routes } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from './context/Authcontext'
function App() {
  const {authUser}=useContext(AuthContext)

  return (
    <div className='p-4 h-screen flex items-center justify-center'>

      <Routes>

        <Route path='/' element={authUser?<Home/>:<Navigate to={'/login'}/>}></Route>
        <Route path='/login' element={authUser?<Navigate to={'/'}/>:<Login/>}></Route>
        <Route path='/signup' element={authUser?<Navigate to={'/'}/>:<Signup/>}></Route>
      </Routes>
<Toaster position="top-left"
  reverseOrder={false}/>


      
    </div>
  )
}

export default App
