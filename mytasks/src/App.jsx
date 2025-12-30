// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import Login from './components/Login'
import Register from './components/register'
import { Route, Routes } from 'react-router-dom'
import { createContext, useState } from 'react'
// import { UserContext } from './App';
import UserLayout from './components/UserLayout';


export const UserContext = createContext();
function App() {
  const [user, setUser] = useState(null)

  return (<div>
    <h1>MyTasks</h1>
    <UserContext.Provider value={{user, setUser}}>
    <Routes>
      <Route index element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/user" element={<UserLayout/>} />
           {/* <Route path="tasks" element=< TaskForm/>/>  */}

      {/* </Route> */}
      {/* <Route path="/dashboard" element={<Dashboard />} /> */}

    </Routes>
    </UserContext.Provider>



    {/* <Register/> */}


  </div>
  )
}

export default App
