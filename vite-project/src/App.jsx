import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import About from './components/about/index'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

        <About/>
          
        
    </>
  )
}

export default App
