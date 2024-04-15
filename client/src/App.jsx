import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import  Home  from './components/Home'
import About from './components/About'
import Error404 from './components/Error404'

function App() {

  return (
    <>
      <header className='flex px-12 lg:py-6 sm:py-4'>
        <h1 className='grow lg:text-5xl sm:text-3xl'>Titanic Survivors</h1>
        <nav>
          <ul className='flex gap-6'>
            <li><a href="/" className='px-4 focus:rounded-full lg:text-3xl md:text-lg'>Home</a></li>
            <li><a href="/about" className='px-4 focus:rounded-full lg:text-3xl md:text-lg'>About</a></li>
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
