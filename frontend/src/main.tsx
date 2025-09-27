import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Login from './Pages/Login.tsx'
import Signup from './Pages/Signup.tsx'
import HomePage from './Pages/HomePage.tsx'
import HistoryPage from './Pages/HistoryPage.tsx'
import { ToastContainer, Bounce } from 'react-toastify'
import Protected from './Components/auth/Protected.tsx'
import ResultPage from './Pages/ResultPage.tsx'

const router = createBrowserRouter([
  {
    path: "/login",
    Component: Login
  }, {
    path: "/signup",
    Component: Signup
  }, {
    path: "/",
    Component: () => (
      <Protected>
        <HomePage />
      </Protected>
    )
  }, {
    path: "/history",
    Component: HistoryPage
  }, {
    path: "/result",
    Component: ResultPage
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
    <ToastContainer
      position="bottom-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick={false}
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="colored"
      transition={Bounce}
    />
  </StrictMode>,
)
