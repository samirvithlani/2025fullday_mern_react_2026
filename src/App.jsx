import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {Header} from "./components/Header"
import { Footer } from './components/Footer'
import { Content } from './components/Content'
import { Match } from './components/Match'
import { MapDemo1 } from './components/MapDemo1'
import { MapDemo2 } from './components/MapDemo2'
import { MapDemo3 } from './components/MapDemo3'
import { MapDemo4 } from './components/MapDemo4'
import { Route, Router, Routes } from 'react-router-dom'
import { HotstarHome } from './components/hotstar/HotstarHome'
import { HotstarMovis } from './components/hotstar/HotstarMovis'
//import './App.css'

function App() {
  


  return (
    <div>
      <Routes>
          <Route path='/home' element ={<HotstarHome/>}></Route>
          <Route path='/movies' element={<HotstarMovis/>} ></Route>
      </Routes>
    </div>
  )
}

export default App
