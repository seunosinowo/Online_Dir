import React from 'react'
import NavBar from './components/NavBar'
import NavDown from './components/NavDown'
import About from './components/About'
import Provide from './components/Provide'
import Services from './components/Services'
import View from './components/View'
import Clients from './components/Clients'

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
    </div>
  )
}

export default App
