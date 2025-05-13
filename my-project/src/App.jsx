import React from 'react'
import Navbar from './components/Navbar/navbar'
import Hero from './components/Hero/Hero'
import Menu from './components/Menu/Menu'

const App = () => {
  return (
    <>
      <main className='overflow-x-hidden'>
        <Navbar />
        <Hero />
        <Menu />
      </main>
    </>
  )
}

export default App