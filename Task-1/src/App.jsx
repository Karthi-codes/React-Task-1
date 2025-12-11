import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import Cameras from './Components/Camera/Cameras'
import Lenses from './Components/Lenses/Lenses'
import Accessories from './Components/Accessories/Accessories'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Cameras/>
      <Lenses/>
      <Accessories/>
      <Footer/>
    </div>
  )
}

export default App