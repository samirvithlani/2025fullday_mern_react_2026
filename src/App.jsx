import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {Header} from "./components/Header"
import { Footer } from './components/Footer'
import { Content } from './components/Content'
import { Match } from './components/Match'
import { MapDemo1 } from './components/MapDemo1'
import { MapDemo2 } from './components/MapDemo2'
//import './App.css'

function App() {
  


  return (
    <div>
      {/* <MapDemo1></MapDemo1> */}
      <MapDemo2></MapDemo2>
    </div>
  )
}

export default App
