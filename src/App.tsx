import { useState } from 'react'
import './App.css'
import { Footter } from './pages/Footter'
import { Header } from './pages/Header'
import { Body } from './pages/Body'
import { SideBar } from './pages/SideBar'

function App() {
  const [count, setCount] = useState(0)


  return (
    <>
      {<SideBar/>}
      <div className='Acontainer'>
        <Header/>
        <Body/>
      </div> 
    </>
  )
}

export default App
