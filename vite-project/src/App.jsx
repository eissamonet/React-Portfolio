import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import About from './components/about/index'
import Contact from './components/contact/index'
import Projects from './components/projects/index'
import Resume from './components/resume/index'
import Navigation from './components/navigation/index'
import Footer from './components/footer/index'
import Header from './components/header/index'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <About/>
        <Projects/>
        <Resume/>
        <Contact/>
        <Footer/>
        <Header/>
        <Navigation/>          
        
    </>
  );
}

export default App;
