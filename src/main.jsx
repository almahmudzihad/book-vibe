import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { RouterProvider } from 'react-router'
import { router } from './Route/Route'
import ContextComponent from './Component/Context/BookContext'
import { ToastContainer } from 'react-toastify'





createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContextComponent>
      <RouterProvider router={router} />
      <ToastContainer />

    </ContextComponent>
   
    
  </StrictMode>,
)



