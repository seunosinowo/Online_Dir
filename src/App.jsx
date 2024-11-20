import React from 'react'
import NavBar from './components/NavBar'
import NavDown from './components/NavDown'
import About from './components/About'
import Provide from './components/Provide'
import Services from './components/Services'
import View from './components/View'
import Clients from './components/Clients'
import Arrow from './components/Arrow'
import Contact from './components/Contact'

const App = () => {
  return (
    <div className='w-full'>
      <NavBar/>
      <NavDown/>
      <About/>
      <Provide/>
      <Services/>
      <View/>
      <Clients/>
      <Arrow/>
      <Contact/>
    </div>
  )
}

export default App
