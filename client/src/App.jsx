import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import  Home  from './components/Home'
import About from './components/About'
import Error404 from './components/Error404'

function App() {
  
  

  return (
    <>
      <header className='flex'>
        <h1 className='grow'>Titanic Survivors</h1>
        <nav>
          <ul className='flex'>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path='/' element={ <Home/> }/>
        <Route path='/about' element={ <About/> }/>
        <Route path='*' element={ <Error404/> } />
      </Routes>
    </>
  )
}

export default App
