import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Login from './Pages/Login.tsx'
import Signup from './Pages/Signup.tsx'
import HomePage from './Pages/HomePage.tsx'
import HistoryPage from './Pages/HistoryPage.tsx'

const router=createBrowserRouter([
  {
    path:"/login",
    Component:Login
  },{
    path:"/signup",
    Component:Signup
  },{
    path:"/",
    Component:HomePage
  },{
    path:"/history",
    Component:HistoryPage
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
