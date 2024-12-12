import React from 'react'
import Navbar from './components/Navbar/Navbar'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './Pages/Home'
import Mens from './Pages/Mens'
import Womens from './Pages/Womens'
import Kids from './Pages/Kids'
import Login from './Pages/Login'

const router = createBrowserRouter([
  {
    path: "/",
    element: <><Navbar/><Home/></>
  },
  {
    path: "/mens",
    element: <><Navbar/><Mens/></>
  },
  {
    path: "/womens",
    element: <><Navbar/><Womens/></>
  },
  {
    path: "/kids",
    element: <><Navbar/><Kids/></>
  },
  {
    path: "/login",
    element: <><Navbar/><Login/></>
  }
])

const App = () => {
  return (
    <>
     <RouterProvider router={router}/>
     </>
  )
}

export default App