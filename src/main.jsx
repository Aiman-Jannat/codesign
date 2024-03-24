import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './layout/Home.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      
      
      
      
    
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className=' lg:max-w-screen-xl mx-auto'>
    <RouterProvider router={router} />
    </div>,
)
