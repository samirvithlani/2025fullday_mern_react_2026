import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {Header} from "./components/Header"
import { Footer } from './components/Footer'
import { Content } from './components/Content'
import { Match } from './components/Match'
//import './App.css'

function App() {
  


  return (
    <div>
      <Header></Header>
      <Match></Match>
      {/* <Content></Content> */}
      <Footer></Footer>
    </div>
  )
}

export default App
