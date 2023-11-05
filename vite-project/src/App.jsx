import React from 'react'
import Portfolio from './components/header'
import About from './components/about'
import Navigation from './components/navigation'
import Footer from './components/footer'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  return (
    <>
      <Portfolio />
      {/* <About /> */}
      <img src={reactLogo} className="App-logo" alt="logo" />
      <img src={viteLogo} className="App-logo" alt="logo" />
      {/* <Navigation /> */}
      <Footer />
    </>
  );
}

export default App;
