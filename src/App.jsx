import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <h1 className='font-bold text-2xl text-red-400'>hello tailwind</h1>
      <p className='btn btn-primary'> dasy btn</p>
    </>
  )
}

export default App
