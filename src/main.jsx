import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Onlineconsult from './components/Onlineconsult.jsx'
import Contactus from './components/Contactus.jsx'
import Login from './components/Login.jsx'
import Singup from './components/Singup.jsx'
import Fullbodychack from './components/Fullbodychack.jsx'
import Home from './components/Home.jsx'
import Layout from './Layout.jsx'
import Labtest from './components/Lebtest.jsx'
import Selfchack from './components/Selfchack.jsx'
import Nar from './components/Nar.jsx'
import Learnmore from './components/Learnmore.jsx'
import Doctorsignup from './components/Doctorsignup.jsx'
import Doctorcontect from './components/Doctorcontect.jsx'
import Doctorlogin from './components/Doctorlogin.jsx'
import Doctordashboard from './components/Doctordashboard.jsx'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [{
      path: '/',
      element: <Home />
    },
    {
      path: '/Consult',
      element: <Onlineconsult />
    },
    {
      path: '/bodycheck',
      element: <Fullbodychack />
    },
    {
      path: '/labtest',
      element: <Labtest />
    },
    {
      path: '/contect',
      element: <Contactus />
    },
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/registor',
      element: <Singup />
    },
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/signup',
      element: <Singup />
    },
    {
      path: '/selfchack',
      element: <Selfchack />
    },
    {
      path: '/nar',
      element: <Nar />
    },
    {
      path: '/learnmore',
      element: <Learnmore />
    },
    {
      path: '/doctorsignup',
      element: <Doctorsignup />
    },
    {
      path: '/doctorlogin',
      element: <Doctorlogin/>
    },
    {
      path: '/doctorcontect',
      element: <Doctorcontect/>
    },
    {
      path: '/doctordashboard',
      element: <Doctordashboard/>
    },

    ]
  }

]
)

axios.defaults.withCredentials =true;

ReactDOM.createRoot(document.getElementById('root')).render(
  

    <RouterProvider router={router} />
  
)
