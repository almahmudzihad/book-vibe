import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import MainLayout from './Layout/MainLayout.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    
  </StrictMode>,
)
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/almahmudzihad/book-vibe.git
git push -u origin main